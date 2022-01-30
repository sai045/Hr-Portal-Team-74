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
    accessor: "dashboard",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          window.location.assign(`${cell.row.values.dashboard}`);
        }}
      >
        Dashboard
      </button>
    ),
  },
];
