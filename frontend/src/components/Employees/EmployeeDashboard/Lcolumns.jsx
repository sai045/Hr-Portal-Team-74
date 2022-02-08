export const COLUMNS = [
  {
    Header: "Leave Id",
    accessor: "_id",
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
