import React, { useState, useMemo, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { useParams } from "react-router";
import { COLUMNS } from "./Lcolumns";
import styles from "./EmployeeDashboard.module.css";

const Travel = () => {
  useEffect(() => {
    sendRequest();
  }, []);
  const [leaves, setLeaves] = useState([]);
  const { eid } = useParams();
  const [Id, setId] = useState(eid);

  const sendRequest = async () => {
    try {
      const leaveRequestsResponse = await fetch(
        `https://mysterious-citadel-93609.herokuapp.com/api/employee/leave/${Id}`
      );
      const leaveRequestsResponseData = await leaveRequestsResponse.json();
      setLeaves(leaveRequestsResponseData.leaveJSON);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => leaves, [leaves]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  return (
    <>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="rounded-3">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="rounded-3">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Travel;
