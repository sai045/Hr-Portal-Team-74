export const COLUMNS = [
  {
    Header: "Id",
    accessor: "employeeId",
  },
  {
    Header: "From",
    accessor: "from",
  },
  {
    Header: "To",
    accessor: "to",
  },
  {
    Header: "Confirmation",
    accessor: "id",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          let id = cell.row.values.id;
          let link = `http://localhost:3000/travel/${id}`;
          window.location.assign(`${link}`);
          // console.log(id);
        }}
      >
        Confirmation
      </button>
    ),
  },
];
