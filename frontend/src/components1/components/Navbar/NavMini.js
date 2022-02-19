import React from "react";
import styles from "./NavMini.module.css";
const NavMini = () => {
  return (
    <div className={styles.completenav}>
      <ul className={styles.navul}>
        <li className={styles.navText}>
          <img
            className={styles.navLink}
            alt=""
            src="https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&w=300&h=300"
            width={30}
          ></img>
        </li>
        <li className={styles.navText}>User Name</li>
      </ul>
    </div>
  );
};
export default NavMini;
