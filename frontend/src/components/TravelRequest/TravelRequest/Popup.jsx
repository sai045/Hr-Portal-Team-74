import React, { Component, useState } from "react";
import { useParams } from "react-router";
import "./PopUp.css";

const PopUp = (props) => {
  let confirmation = false;
  const { tid } = useParams();

  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/travel/${tid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confirmation: confirmation,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return props.trigger ? (
    <div className="Pop-Card">
      <div className="Pop-top">
        <h4 className="Pop-head">Do You Want To Confirm the Request?</h4>
        <button
          className="close-btn"
          onClick={() => {
            const href = window.location.href;
            const href_elements = href.split("/");
            const id = href_elements[3];
            console.log(id);
            window.location.assign(
              `http://localhost:3000/${id}/travelrequests`
            );
          }}
        >
          {" "}
          ❌
        </button>
      </div>

      <div className="buttons-div">
        <span>
          <button
            className="Pop-btn"
            onClick={() => {
              confirmation = true;
              sendRequest();
              const href = window.location.href;
              const href_elements = href.split("/");
              const id = href_elements[3];
              console.log(id);
              window.location.assign(
                `http://localhost:3000/${id}/travelrequests`
              );
              confirmation = false;
            }}
          >
            Yes
          </button>
        </span>
        <button
          className="Pop-btn"
          onClick={() => {
            confirmation = false;
            sendRequest();
          }}
        >
          No
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
export default PopUp;
