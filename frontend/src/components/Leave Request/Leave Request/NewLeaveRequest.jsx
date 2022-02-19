import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./NewLeaveRequest.module.css";

const NewLeaveRequest = (props) => {
  const [employeeId, setId] = useState("");
  const [leavedate, setLeavedate] = useState("");
  const [days, setDays] = useState("");

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/leaverequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId,
          leavedate,
          days,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const leavedateHandler = (event) => {
    setLeavedate(event.target.value);
  };
  const daysHandler = (event) => {
    setDays(event.target.value);
  };

  const newLeaveHandler = (event) => {
    sendRequest();
    event.preventDefault();
    const NewLeave = {
      employeeId,
      leavedate,
      days,
    };
    props.onAdd(NewLeave);
    setId("");
    setLeavedate("");
    setDays("");

    console.log(NewLeave);
  };

  return (
    <>
      <Card className={`${styles.Card} m-4`}>
        <div className="m-4">
          <h1 className={styles.heading}>New LeaveRequest</h1>
        </div>
        <form
          action=""
          onSubmit={newLeaveHandler}
          className={`m-2 p-4 ${styles.newLeaveForm}`}
        >
          <label htmlFor="id">Id : </label>
          <input
            type="text"
            name="Id"
            id="Id"
            placeholder="Enter your Id"
            value={employeeId}
            onChange={idHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="leavedate">LeaveDate : </label>
          <input
            type="text"
            name="leavedate"
            id="leavedate"
            placeholder="Enter your Leave date"
            value={leavedate}
            onChange={leavedateHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="days">Days : </label>
          <input
            type="text"
            name="days"
            id="days"
            placeholder="Enter number of days"
            value={days}
            onChange={daysHandler}
            required
          />
          <br />
          <br />
          <button type="submit" className={`m-4`}>
            Submit
          </button>
          <button onClick={props.onClose} className={styles.closeButton}>
            <i className="fas fa-window-close">Close</i>
          </button>
        </form>
      </Card>
    </>
  );
};

export default NewLeaveRequest;
