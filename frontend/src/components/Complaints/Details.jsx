import React, { useState } from "react";
import styles from './Complaints.module.css'
import Card from "../UI/Card";

const Details = (props) => {
  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.li}>Name: {props.name}</li>
        <li className={styles.li}>Department: {props.department}</li>
        <li className={styles.li}>Complaint: {props.complaint}</li>
        <li className={styles.li}>
          <button className={styles.del} onClick={props.onRemove}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Details;
