import React from "react";
import styles from "./NavMini.module.css";
const NavMini = (props) => {
  return (
    <div className={styles.completenav}>
      <ul className={styles.navul}>
        <li className={`${styles.navText} m-2`}>{props.username}</li>
      </ul>
    </div>
  );
};
export default NavMini;
