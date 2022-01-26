import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns(sl)";
import "./salary.css";

const Data = [
  {
    department: "Accounting",
    count: 25,
    amount: 270500,
  },
  {
    department: "Services",
    count: 34,
    amount: 150000,
  },
  {
    department: "Legal",
    count: 8,
    amount: 206000,
  },
  {
    department: "Product Managment",
    count: 13,
    amount: 130500,
  },
];

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="right">
      <span>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
      </span>
    </div>
  );
};

export default Table;
