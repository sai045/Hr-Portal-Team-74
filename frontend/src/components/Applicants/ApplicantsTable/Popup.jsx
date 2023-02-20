import React, { Component, useState } from "react";
import { useParams } from "react-router";
import "./PopUp.css";

const PopUp = (props) => {
  const { aid } = useParams();

  const deleteRequest = async () => {
    try {
      const response = await fetch(
        `https://sai045-hr-portal-backend.onrender.com/api/applicant/${aid}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      console.log("SUCCESSFULL");
    } catch (err) {
      console.log(err);
    }
  };

  const sendRequest = async () => {
    try {
      const response = await fetch(
        `https://sai045-hr-portal-backend.onrender.com/api/applicant/${aid}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      console.log("SUCCESSFULL");
    } catch (err) {
      console.log(err);
    }
  };

  return props.trigger ? (
    <div className="Pop-Card">
      <div className="Pop-top">
        <h4 className="Pop-head">Do You Want To Schedule the Interview?</h4>
        <button
          className="close-btn"
          onClick={() => {
            const href = window.location.href;
            const href_elements = href.split("/");
            const id = href_elements[3];
            console.log(id);
            window.location.assign(
              `https://hr-portal-team-74-y1r7.vercel.app/${id}/applicantpage`
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
              sendRequest();
              const href = window.location.href;
              const href_elements = href.split("/");
              const id = href_elements[3];
              console.log(id);
              window.location.assign(
                `https://hr-portal-team-74-y1r7.vercel.app/${id}/applicantpage`
              );
            }}
          >
            Yes
          </button>
        </span>
        <button
          className="Pop-btn"
          onClick={() => {
            deleteRequest();
            const href = window.location.href;
            const href_elements = href.split("/");
            const id = href_elements[3];
            window.location.assign(
              `https://hr-portal-team-74-y1r7.vercel.app/${id}/applicantpage`
            );
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
