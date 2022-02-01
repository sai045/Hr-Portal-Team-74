import React, { useMemo, useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./column(tr)";
import GlobalFilter from "./GlobalFilter";
import styles from "./TravelRequests.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import LoadingSpinner from "../../UI/LoadingSpinner";
import NewTravel from "./NewTravel";

const TravelRequests = () => {
  const [travels, setTravels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTravel, setNewTravel] = useState(false);
  const sendRequest = async () => {
    setIsLoading(true);
    // let travels;
    try {
      const response = await fetch("http://localhost:5000/travel");

      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // travels = responseData.travels;
      setTravels(responseData.travels);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => travels, [travels]);
  const tid = 1;
  const travelHandler = () => {
    window.location.href = `/${tid}/travelConfirmation`;
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

  const submitHandler = () => {
    setNewTravel(false);
  };
  const { globalFilter, pageIndex, pageSize } = state;

  const closeHandler = () => {
    setNewTravel(false);
  };

  return (
    <>
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <Navbar />
      <Card>
        <button
          className={`btn btn-success ${styles.newTravel}`}
          onClick={() => {
            setNewTravel(true);
          }}
        >
          New Travel
        </button>
        {newTravel && (
          <NewTravel onAdd={submitHandler} onClose={closeHandler} />
        )}
        <div className={styles.Travelrequests}>
          <div className={styles.heading}>
            <h1>Travel Requests</h1>
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
                      <button onClick={travelHandler}>Confirmation</button>
                      {/* <Link to={`/${tid}/travelConfirmation`}>
                        <button>Confirmation</button>
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

export default TravelRequests;
