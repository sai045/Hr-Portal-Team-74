import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import styles from "./LeaveRequests.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import NewLeaveRequest from "./NewLeaveRequest";
import PopUp from "./PopUp";

const LeaveRequests = () => {
  const [leaverequests, setLeaverequests] = useState([]);
  const [newLeaveRequest, setnewLeaveRequest] = useState(false);

  useEffect(() => {
    sendRequest();
  }, []);

  const lid = 1;
  const confirmHandler = () => {
    window.location.href = `/${lid}/leaveConfirmation`;
  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => leaverequests, [leaverequests]);

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

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/leaverequests/");
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setLeaverequests(responseData.leaverequests);
    } catch (err) {
      console.error(err);
    }
  };

  const { globalFilter, pageIndex, pageSize } = state;

  const closeHandler = () => {
    setnewLeaveRequest(false);
  };

  const submitHandler = () => {
    setnewLeaveRequest(false);
  };
  const [Popup, setPopup] = useState(false);

  return (
    <>
      <Navbar />
      <Card>
        <div className={styles.LeaveRequests}>
          <div className={styles.Leaverequests}>
            <div className={styles.heading}>
              <h1>Leave Requests</h1>
            </div>
            <button
              className={`btn ${styles.newLeaveRequest}`}
              onClick={() => {
                setnewLeaveRequest(true);
              }}
            >
              Add New
            </button>
            {newLeaveRequest && (
              <NewLeaveRequest onAdd={submitHandler} onClose={closeHandler} />
            )}
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
                        <button onClick={() => setPopup(true)}>
                          {" "}
                          Confirm{" "}
                        </button>
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
        </div>
      </Card>
    </>
  );
};

export default LeaveRequests;
