import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-3"
        style={{ width: "10rem" }}
      />
    </span>
  );
};

export default GlobalFilter;
