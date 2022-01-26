import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./Employee.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    full_name: "Batsheva Beedle",
    email: "bbeedle0@sourceforge.net",
    department: "Marketing",
    Working_Hours: 6,
    Hired_date: "10.04.2017",
  },
  {
    id: 2,
    full_name: "Adrian Gooke",
    email: "agooke1@discovery.com",
    department: "Human Resources",
    Working_Hours: 12,
    Hired_date: "21.04.2018",
  },
  {
    id: 3,
    full_name: "Kylen Blunsom",
    email: "kblunsom2@360.cn",
    department: "Research and Development",
    Working_Hours: 13,
    Hired_date: "04.04.2019",
  },
  {
    id: 4,
    full_name: "Tull Purver",
    email: "tpurver3@infoseek.co.jp",
    department: "Engineering",
    Working_Hours: 10,
    Hired_date: "13.05.2017",
  },
];

const Employee = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);
  const eid = 1;
  const infoHandler = () => {
    window.location.href = `/${eid}/employeeDashboard`;
  };

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
        <div className={styles.Employee}>
          <div className={styles.heading}>
            <h1>Employee Data</h1>
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
                  <th>More info</th>
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
                      <button onClick={infoHandler}>More info</button>
                      {/* <Link to={`/${eid}/employeeDashboard`}>
                        <button>More info</button>
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

export default Employee;
