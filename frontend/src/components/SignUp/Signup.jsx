import React, { useState } from "react";
import styles from "./signup.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const cpasswordHandler = (event) => {
    setCpassword(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        name,
        email,
        password,
        password2,
      };

      try {
        const res = fetch("http:localhost:5000/users", {
          method: POST,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div className={styles.whole}>
      <div className={styles.lgnbx} onSubmit={(e) => onSubmit(e)}>
        <h1 className={styles.head}>HR-Portal</h1>
        <svg
          className={styles.head}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="70"
          fill="rgb(88 99 161)"
          viewBox="0 0 16 16"
        >
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
        </svg>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameHandler}
          required
          className={styles.infoBox}
        ></input>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={emailHandler}
          required
          className={styles.infoBox}
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
          required
          className={styles.infoBox}
        ></input>

        <input
          type="password"
          placeholder=" Confirm Password"
          value={cpassword}
          onChange={cpasswordHandler}
          className={styles.infoBox}
        ></input>

        <button className={styles.btn}>I'm in</button>
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
