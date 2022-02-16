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
    accessor: "_id",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          const href = window.location.href;
          const href_elements = href.split("/");
          const id = href_elements[3];
          console.log(id);
          const tid = cell.row.values._id;
          console.log(tid);
          window.location.assign(`http://localhost:3000/${id}/travel/${tid}`);
        }}
      >
        Confirmation
      </button>
    ),
  },
];
