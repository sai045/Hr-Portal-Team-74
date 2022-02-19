export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Leave Date",
    accessor: "leavedate",
  },
  {
    Header: "Days",
    accessor: "days",
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
          const lid = cell.row.values._id;
          window.location.assign(`http://localhost:3000/${id}/leaves/${lid}`);
        }}
      >
        Confirmation
      </button>
    ),
  },
];
