import React from "react";
import "./Announcements.css";

const resumeHandler = (event) => {
  const href = window.location.href;
  const href_elements = href.split("/");
  const id = href_elements[3];
  window.location.href = `/${id}`;
};

const Announcements = () => {
  return (
    <div className="divhead">
      <marquee width="100%" direction="down" height="500px">
        <h1 className="heading">This feature will be implemented soon...⏰</h1>
      </marquee>
      <button className="homebtn" onClick={resumeHandler}>
        Go back to home
      </button>
    </div>
  );
};
export default Announcements;
