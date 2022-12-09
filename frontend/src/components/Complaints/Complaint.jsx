import React from "react";
import styles from "./Complaints.module.css";
import Card from "../UI/Card";

const Complaint = (props) => {
  const deleteHandler = async () => {
    try {
      const response = await fetch(
        `https://hr-portal-team-74.vercel.app/api/complaints/${props.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // props.onDelete(props.id);
      props.sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default Complaint;
