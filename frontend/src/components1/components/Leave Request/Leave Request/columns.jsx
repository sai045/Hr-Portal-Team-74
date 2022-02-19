export const COLUMNS = [
  {
    Header: "Id",
    accessor: "employeeId",
  },
  {
    Header: "Leave Date",
    accessor: "leavedate",
    Cell: ({ cell }) => {
      let date = new Date(cell.row.values.schedule);
      let days = date.getDate() - 1;
      let months = date.getMonth() + 3;
      let years = date.getFullYear();
      let DATE = `${days}-${months}-${years}`;
      return <p>{DATE}</p>;
    },
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
          window.location.assign(
            `https://mysterious-citadel-93609.herokuapp.com/${id}/leaves/${lid}`
          );
        }}
      >
        Confirmation
      </button>
    ),
  },
];
