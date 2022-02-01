import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const LinkStyles = {
    textDecoration: "none",
    margin: "0.5rem",
    color: "grey",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100vw" }}
      >
        <div className="container-fluid">
          <Link to={`/`} style={LinkStyles}>
            <h1>HR Portal</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-button"
            id="navbarNavDropdown"
            className="nav-button"
          >
            <ul className="navbar-nav mx-5">
              <li className="navbar-text" className={styles.navText}>
                User Name
              </li>
              <li className="nav-item dropdown">
                <img
                  className="nav-link dropdown-toggle"
                  alt=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src="https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&w=300&h=300"
                  className={styles.navPro}
                ></img>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item">Details</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
