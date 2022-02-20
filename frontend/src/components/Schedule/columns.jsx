export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Timing",
    accessor: "schedule",
    columns: [
      {
        Header: "Date",
        // accessor: "schedule",
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
        Header: "Time",
        accessor: "schedule",
        Cell: ({ cell }) => {
          let date = new Date(cell.row.values.schedule);
          let minutes = date.getMinutes();
          let hours = date.getHours();
          let DATE = `${hours}:${minutes}`;
          return <p>{DATE}</p>;
        },
      },
    ],
  },
];
