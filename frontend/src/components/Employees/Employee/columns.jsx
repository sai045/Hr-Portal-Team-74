export const COLUMNS = [
  {
    Header: "Employee Name",
    accessor: "name",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Working Hours",
    accessor: "working_hours",
  },
  {
    Header: "More Info",
    accessor: "_id",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          // window.location.assign(`${cell.row.values.dashboard}`);
          const href = window.location.href;
          const href_elements = href.split("/");
          const id = href_elements[3];
          const eid = cell.row.values._id;
          console.log(id);
          console.log(eid);
          window.location.assign(
            `http://localhost:3000/${id}/employeeDashboard/${eid}`
          );
        }}
      >
        Dashboard
      </button>
    ),
  },
];
