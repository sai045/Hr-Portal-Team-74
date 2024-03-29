import React, { useMemo, useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./Applicant.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import NewApplicant from "./NewApplicant";
import LoadingSpinner from "../../UI/LoadingSpinner";
import PopUp from "./Popup";

const Applicant = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedApplicants, setLoadedApplicants] = useState([]);
  const [newApplicant, setNewApplicant] = useState(false);

  let error = [];

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sai045-hr-portal-backend.onrender.com/api/applicant/"
      );
      const responseData = await response.json();
      setLoadedApplicants(responseData.applicants);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      error.push(err);
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => loadedApplicants, [loadedApplicants]);

  const submitHandler = () => {
    // sendRequest();
    setNewApplicant(false);
  };

  const errorHandler = (err) => {
    error.push(err);
    printError();
  };

  const printError = () => {
    const Error = document.createElement("h1");
    let ERROR = String(error[0]);
    const duplicate = String("E11000");

    if (ERROR.includes(duplicate)) {
      Error.innerHTML = "Applicant already exists";
    }

    document.getElementById("error").appendChild(Error);
  };

  const closeHandler = () => {
    setNewApplicant(false);
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
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Navbar />
      <Card className={styles.background}>
        <button
          className={`btn btn-success ${styles.newApplicant}`}
          onClick={() => {
            setNewApplicant(true);
          }}
        >
          New Applicant
        </button>
        <div className={styles.Applicant}>
          {newApplicant && (
            <NewApplicant
              onAdd={submitHandler}
              onError={errorHandler}
              onClose={closeHandler}
              sendRequest={sendRequest}
            />
          )}
          <div id="error" className={newApplicant ? "m-4" : "m-2"}></div>
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
        <PopUp trigger={props.popup} />
      </Card>
    </>
  );
};

export default Applicant;
