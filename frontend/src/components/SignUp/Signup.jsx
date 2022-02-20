import React, { useState } from "react";
import styles from "./signup.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const locationHandler = (event) => {
    setLocation(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const cpasswordHandler = (event) => {
    setCpassword(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      document.getElementById("error").innerHTML =
        "Password should be more than 8 characters";
    } else {
      if (password !== cpassword) {
        console.log("Passwords do not match");
        document.getElementById("error").innerHTML = "Passwords do not match";
      } else {
        try {
          const response = await fetch(
            "http://localhost:5000/api/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                location,
                number,
                password,
              }),
            }
          );
          const responseData = await response.json();
          if (!response.ok) {
            throw new Error(responseData.message);
          }
          const id = responseData.id;
          console.log(id);
          console.log("Successful"),
            window.location.assign(
              `http://localhost:3000/`
            );
        } catch (err) {
          console.error(err);
          document.getElementById("error").innerHTML = "Email already exists";
        }
      }
    }
  };

  return (
    <div className={styles.whole}>
      <div className={styles.lgnbx}>
        <h1 className={styles.head}>Plexus</h1>
        <h1 className={styles.head}>SignUp</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={nameHandler}
            required
            className={styles.infoBox}
          ></input>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailHandler}
            required
            className={styles.infoBox}
          ></input>

          <input
            type="text"
            name="Location"
            placeholder="Location"
            value={location}
            onChange={locationHandler}
            required
            className={styles.infoBox}
          ></input>

          <input
            type="text"
            name="Number"
            placeholder="Number"
            value={number}
            onChange={numberHandler}
            required
            className={styles.infoBox}
          ></input>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
            required
            className={styles.infoBox}
          ></input>

          <input
            type="password"
            name="cpassword"
            placeholder=" Confirm Password"
            value={cpassword}
            onChange={cpasswordHandler}
            className={styles.infoBox}
          ></input>
          <div id="error"></div>
          <input type="submit" className={styles.btn} value="I'm in"></input>
        </form>
      </div>
      <div className={styles.image}>
        <img
          src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
          alt=""
          width="600px"
          height="500px"
        ></img>
      </div>
    </div>
  );
};

export default SignUp;
