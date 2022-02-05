import React, { Component } from "react";
import "./PopUp.css";

function PopUp(props) {
  return props.trigger ? (
    <div className="Pop-Card">
      <div className="Pop-top">
        <h4 className="Pop-head">Do You Want To Confirm the Request?</h4>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {" "}
          ❌
        </button>
      </div>

      <div className="buttons-div">
        <span>
          <button className="Pop-btn">Yes</button>
        </span>
        <button className="Pop-btn" onClick={() => props.setTrigger(false)}>
          No
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default PopUp;
