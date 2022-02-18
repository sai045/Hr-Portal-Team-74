import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const LinkStyles = {
    textDecoration: "underline",
    margin: "0.5rem",
    textAlign: "center",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      console.log("Successful");
      // window.location.assign(`http://localhost:3000/Home`);
      const id = responseData.id;
      console.log(id);
      window.location.assign(`http://localhost:3000/${id}`);
      console.log(response.json);
    } catch (err) {
      console.error(err.response);
      document.getElementById("error").innerHTML = "Auth Failed";
    }
  };

  return (
    <div className={styles.whole}>
      <div className={styles.lgnbx}>
        <h1 className={styles.head}>HR-Portal</h1>
        <svg
          className={styles.head}
          xmlns="htt4p://www.w3.org/2000/svg"
          width="50"
          height="70"
          fill="rgb(88 99 161)"
          viewBox="0 0 16 16"
        >
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
        </svg>
        <form onSubmit={(e) => onSubmit(e)}>
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
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
            required
            className={styles.infoBox}
          ></input>
          <div id="error"></div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
        <Link to={`/Signup`} style={LinkStyles}>
          <p style={{ color: "blue" }} className={styles.foot}>
            Sign Up here
          </p>
        </Link>
      </div>
      <div className={styles.image}>
        <img
          src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
          alt=""
          width="600px"
          height="500px"
        ></img>
      </div>
    </div>
  );
  // }
};

export default Login;
