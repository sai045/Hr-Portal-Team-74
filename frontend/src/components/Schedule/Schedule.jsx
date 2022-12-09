import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./Schedule.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";
import { useState, useEffect } from "react";

const Schedule = () => {
  const [Data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await fetch(
      `https://hr-portal-team-74.vercel.app/api/applicant/schedule/date`
    );

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message);
    }
    setData(responseData.scheduledApplicants);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, [Data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Navbar />
      <Card>
        <div className={styles.Schedule}>
          <div className={styles.heading}>
            <h1>Schedule</h1>
          </div>
          <div className={styles.search}>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>

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
          <div className="m-2">
            <span>
              Go to page
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value - 1)
                    : 0;
                  gotoPage(pageNumber);
                }}
                className="m-2"
                style={{ width: "40px" }}
              />
            </span>
            <span className="mx-1">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 50].map((pageSize) => (
                <option value={pageSize} key={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div className="m-2 px-4">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              style={{ width: "8rem" }}
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              style={{ width: "8rem" }}
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Schedule;
