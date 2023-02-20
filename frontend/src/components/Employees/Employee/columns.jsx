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
    Header: "Hired Date",
    accessor: "hired_date",
    Cell: ({ cell }) => {
      let date = new Date(cell.row.values.hired_date);
      let days = date.getDate();
      let months = date.getMonth() + 1;
      let years = date.getFullYear();
      let DATE = `${days}-${months}-${years}`;
      return <p>{DATE}</p>;
    },
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
            `https://hr-portal-team-74-y1r7.vercel.app/${id}/employeeDashboard/${eid}`
          );
        }}
      >
        Dashboard
      </button>
    ),
  },
];
