import React, { useState } from "react";
import styles from "./Complaints.module.css";
import Card from "../UI/Card";
import { sendFile } from "express/lib/response";

const Details = (props) => {
  const deleteHandler = async (props) => {
    try {
      await fetch(`http://localhost:5000/complaints/${props.id}`, "DELETE")
        .then(() => {
          console.log("Deleted Complaint");
        })
        .catch((err) => {
          console.log(err);
        });
      props.onDelete(props.id);
    } catch (err) {}
  };
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>Name: {props.name}</li>
        <li className={styles.li}>Department: {props.department}</li>
        <li className={styles.li}>Complaint: {props.complaint}</li>
        <li className={styles.li}>
          <button className={styles.del} onClick={deleteHandler}>
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default Details;
