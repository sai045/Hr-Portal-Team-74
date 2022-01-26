import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./Applicant.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import { Link, useParams } from "react-router-dom";
import Resume from "../Resume/Resume";

const Data = [
  {
    id: 1,
    name: "Juditha Brookshaw",
    qualification: "Services",
    age: 39,
    experience: 4,
    position: "Research and Development",
  },
  {
    id: 2,
    name: "Jesse Butson",
    qualification: "Accounting",
    age: 25,
    experience: 3,
    position: "Marketing",
  },
  {
    id: 3,
    name: "Laurianne Jurkowski",
    qualification: "Marketing",
    age: 58,
    experience: 9,
    position: "Services",
  },
  {
    id: 4,
    name: "Oliviero Catt",
    qualification: "Marketing",
    age: 54,
    experience: 9,
    position: "Training",
  },
];

const Applicant = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);
  const uid = "u1";
  const resumeHandler = (event) => {
    window.location.href = `/${uid}/resume`;
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
        <div className={styles.Applicant}>
          <div className={styles.heading}>
            <h1>Applicant Data</h1>
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
                  <th>Resume</th>
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
                      <button onClick={resumeHandler}>Resume</button>
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

export default Applicant;
