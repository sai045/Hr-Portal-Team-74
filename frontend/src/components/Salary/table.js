import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns(sl)";
// import "./salary.css";
import styles from "./salary.module.css";

const Table = (props) => {
  const [Data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/salary`);
      const responseData = await response.json();
      setData(responseData.obj);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, [Data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className={styles.right}>
      {/* <span> */}
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </span> */}
    </div>
  );
};

export default Table;
