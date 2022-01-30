import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Qualification",
    accessor: "qualification",
  },
  {
    Header: "Experience",
    accessor: "experience",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Resume",
    accessor: "resume",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          window.location.assign(`${cell.row.values.resume}`);
        }}
      >
        Resume
      </button>
    ),
  },
];
