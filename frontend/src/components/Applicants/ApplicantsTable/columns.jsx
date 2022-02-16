import { Link, useParams } from "react-router-dom";

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
    accessor: "_id",
    Cell: ({ cell }) => (
      <button
        onClick={() => {
          const href = window.location.href;
          const href_elements = href.split("/")
          const id = href_elements[3]
          const aid = cell.row.values._id;
          console.log(id);
          console.log(aid);
          window.location.assign(`http://localhost:3000/${id}/resume/${aid}`);
        }}
      >
        Resume
      </button>
    ),
  },
];
