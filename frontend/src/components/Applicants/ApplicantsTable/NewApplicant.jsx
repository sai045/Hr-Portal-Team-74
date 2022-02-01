import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./NewApplicant.module.css";

const NewComplaint = (props) => {
  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/applicant/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          qualification,
          position,
          experience,
        }),
      });
    } catch (err) {
      // console.log(err);
      props.onError(err);
    }
  };
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState(0);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const qualificationHandler = (event) => {
    setQualification(event.target.value);
  };
  const complaintHandler = (event) => {
    setPosition(event.target.value);
  };
  const experienceHandler = (event) => {
    setExperience(event.target.value);
  };
  const newApplicantHandler = (event) => {
    event.preventDefault();
    const NewApplicant = {
      name,
      qualification,
      experience,
      position,
    };
    sendRequest();
    props.onAdd(NewApplicant);
    props.sendRequest();
    setName("");
    setPosition("");
    setQualification("");
    setExperience(0);
    console.log(NewApplicant);
  };
  return (
    <Card className={`${styles.Card} m-4`}>
      <div className="m-4">
        <h1 className={styles.heading}>New Applicant</h1>
      </div>
      <button onClick={props.onClose} className={styles.closeButton}>
        <i className="fas fa-window-close">Close</i>
      </button>
      <form
        action=""
        onSubmit={newApplicantHandler}
        className={`m-2 p-4 ${styles.newApplicantForm}`}
      >
        <label htmlFor="Name">Name : </label>
        <input
          type="text"
          name="Name"
          id="Name"
          placeholder="Enter your name"
          value={name}
          onChange={nameHandler}
          required
        />
        <br />
        <br />
        <label htmlFor="qualification">Qualification : </label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          placeholder="Enter your department"
          value={qualification}
          onChange={qualificationHandler}
          required
        />
        <br />
        <br />
        <label htmlFor="position">Position : </label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Enter your desired position"
          value={position}
          onChange={complaintHandler}
          required
        />
        <br />
        <br />
        <label htmlFor="experience">Experience : </label>
        <input
          type="number"
          name="experience"
          id="experience"
          placeholder="Enter your experience"
          value={experience}
          onChange={experienceHandler}
          required
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
