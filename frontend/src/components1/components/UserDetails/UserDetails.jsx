import React, { useState, useEffect } from "react";
import styles from "./UserDetails.module.css";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const { id } = useParams();
  const [Id] = useState(id);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        `https://mysterious-citadel-93609.herokuapp.com/api/${Id}`
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw Error("Error");
      }
      const username = responseData.user.name;
      const useremail = responseData.user.email;
      const usernum = responseData.user.number;
      const userlocation = responseData.user.location;

      setName(username);
      setEmail(useremail);
      setNumber(usernum);
      setLocation(userlocation);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <div className={styles.full}>
        <h1 className={styles.head}>About</h1>
        <ul className={styles.detail}>
          <li className={`${styles.header} m-2`}>Name</li>
          <li className={`${styles.about} m-2`}>{name}</li>
        </ul>
        <ul className={styles.detail}>
          <li className={`${styles.header} m-2`}>Email</li>
          <li className={`${styles.about} m-2`}>{email}</li>
        </ul>
        <ul className={styles.detail}>
          <li className={`${styles.header} m-2`}>Contact no.</li>
          <li className={`${styles.about} m-2`}>{number}</li>
        </ul>
        <ul className={styles.detail}>
          <li className={`${styles.header} m-2`}>Location</li>
          <li className={`${styles.about} m-2`}>{location}</li>
        </ul>
      </div>
    </>
  );
};
export default UserDetails;
