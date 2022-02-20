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
    Header: "Applied date",
    accessor: "applied_date",
    Cell: ({ cell }) => {
      let date = new Date(cell.row.values.applied_date);
      let days = date.getDate();
      let months = date.getMonth() + 1;
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
            `http://localhost:3000/${id}/travel/${tid}`
          );
        }}
      >
        Confirmation
      </button>
    ),
  },
];
