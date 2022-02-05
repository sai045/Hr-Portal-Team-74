import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./NewTravel.module.css";

const NewTravel = (props) => {
  const [employeeId, setId] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/travel/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId,
          from,
          to,
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
  const fromHandler = (event) => {
    setFrom(event.target.value);
  };
  const toHandler = (event) => {
    setTo(event.target.value);
  };

  const newTravelHandler = (event) => {
    sendRequest();
    event.preventDefault();
    const NewTravel = {
      employeeId,
      from,
      to,
    };
    props.onAdd(NewTravel);
    setId("");
    setFrom("");
    setTo("");

    console.log(NewTravel);
  };

  return (
    <>
      <Card className={`${styles.Card} m-4`}>
        <button onClick={props.onClose} className={styles.closeButton}>
          <i className="fas fa-window-close">Close</i>
        </button>
        <div className="m-4">
          <h1 className={styles.heading}>New Travel</h1>
        </div>
        <form
          action=""
          onSubmit={newTravelHandler}
          className={`m-2 p-4 ${styles.newTravelForm}`}
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
          <label htmlFor="from">From : </label>
          <input
            type="text"
            name="from"
            id="from"
            placeholder="Enter your from"
            value={from}
            onChange={fromHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="to">To : </label>
          <input
            type="text"
            name="to"
            id="to"
            placeholder="Enter your desired to"
            value={to}
            onChange={toHandler}
            required
          />
          <br />
          <br />

          <button type="submit" className={`m-4`}>
            Submit Travel
          </button>
        </form>
      </Card>
    </>
  );
};

export default NewTravel;
