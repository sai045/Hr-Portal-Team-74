export const COLUMNS = [
  {
    Header: "Travel Id",
    accessor: "id",
  },
  {
    Header: "Confirmation Status",
    accessor: (d) => {
      if (d.confirmation.toString() == "true") {
        return "Accepted";
      } else {
        return "Rejected/Under Consideration";
      }
    },
  },
];
