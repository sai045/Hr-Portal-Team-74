import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./LeaveRequests.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    Employee_Name: "Darin Farrand",
    Leave_Date: "10/9/2016",
    Days: 7,
    Purpose:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    id: 2,
    Employee_Name: "Doralynne De Paepe",
    Leave_Date: "7/18/2017",
    Days: 1,
    Purpose: "Fusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 3,
    Employee_Name: "Rici Gobat",
    Leave_Date: "6/9/2017",
    Days: 8,
    Purpose: "",
  },
  {
    id: 4,
    Employee_Name: "Carmela Rodie",
    Leave_Date: "11/21/2016",
    Days: 10,
    Purpose: "",
  },
];

const LeaveRequests = () => {
  const lid = 1;
  const confirmHandler = () => {
    window.location.href = `/${lid}/leaveConfirmation`;
  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

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
        <div className={styles.LeaveRequests}>
          <div className={styles.heading}>
            <h1>Leave Requests</h1>
          </div>
          <div className={styles.search}>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>

          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="rounded-3">
                      {column.render("Header")}
                    </th>
                  ))}
                  <th>Confirmation</th>
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
                    <td>
                      <button onClick={confirmHandler}>Confirm</button>
                      {/* <Link to={`/${lid}/leaveConfirmation`}>
                        <button>Confiram</button>
                      </Link> */}
                    </td>
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

export default LeaveRequests;
