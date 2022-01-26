import React, { Component } from "react";
import styles from "./signup.module.css";

class SignUp extends Component {
  render() {
    return (
      <div className={styles.whole}>
        <div className={styles.lgnbx}>
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
            placeholder="Email"
            className={styles.infoBox}
          ></input>

          <input
            type="password"
            placeholder="Password"
            className={styles.infoBox}
          ></input>

          <input
            type="password"
            placeholder=" Confirm Password"
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
  }
}

export default SignUp;
