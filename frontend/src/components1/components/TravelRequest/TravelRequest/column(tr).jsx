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
    Header:"Applied date",
    accessor:"applied_date",
    Cell: ({ cell }) => {
      let date = new Date(cell.row.values.applied_date);
      let days = date.getDate() - 1;
      let months = date.getMonth() + 3;
      let years = date.getFullYear();
      let DATE = `${days}-${months}-${years}`;
      return <p>{DATE}</p>;
    },
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
          const tid = cell.row.values._id;
          window.location.assign(
            `https://mysterious-citadel-93609.herokuapp.com/${id}/travel/${tid}`
          );
        }}
      >
        Confirmation
      </button>
    ),
  },
];
