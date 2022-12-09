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
          window.location.assign(`https://hr-portal-team-74-y1r7.vercel.app/${id}/leaves/${lid}`);
        }}
      >
        Confirmation
      </button>
    ),
  },
];
