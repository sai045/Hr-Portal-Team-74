import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Complaints.module.css";

const NewComplaint = (props) => {
  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/complaints/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Department: department,
          complaint: complaint,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [complaint, setComplaint] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const departmentHandler = (event) => {
    setDepartment(event.target.value);
  };
  const complaintHandler = (event) => {
    setComplaint(event.target.value);
  };
  const newComplaintHandler = (event) => {
    event.preventDefault();
    const NewComplaint = {
      Name: name,
      Department: department,
      complaint,
    };
    sendRequest();
    props.onAdd(NewComplaint);
    setName(""), setComplaint(""), setDepartment("");
    console.log(NewComplaint);
  };

  return (
    <Card className={`${styles.Card} m-4`}>
      <button onClick={props.onClose} className={styles.closeButton}>
        <i className="fas fa-window-close">Close</i>
      </button>
      <div className="m-4">
        <h1 className={styles.heading}>New Complaint</h1>
      </div>
      <form
        action=""
        onSubmit={newComplaintHandler}
        className={`m-2 p-4 ${styles.newComplaintForm}`}
      >
        <label htmlFor="Name">Name : </label>
        <input
          type="text"
          name="Name"
          id="Name"
          placeholder="Enter your name"
          value={name}
          onChange={nameHandler}
        />
        <br />
        <br />
        <label htmlFor="Department">Department : </label>
        <input
          type="text"
          name="Department"
          id="Department"
          placeholder="Enter your department"
          value={department}
          onChange={departmentHandler}
        />
        <br />
        <br />
        <label htmlFor="complaint">Complaint : </label>
        <input
          type="text"
          name="complaint"
          id="complaint"
          placeholder="Enter your complaint"
          value={complaint}
          onChange={complaintHandler}
        />
        <br />
        <br />
        <button type="submit" className={`m-4`}>
          Submit Complaint
        </button>
      </form>
    </Card>
  );
};

export default NewComplaint;
