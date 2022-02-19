import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./Logo.jpeg";
import * as ReactBootsrtap from "react-bootstrap";
import NavMini from "./NavMini";

const Navbar = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const [Id, SetId] = useState(id);
  // SetId(id);
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
      setName(username);
    } catch (err) {
      console.log(err);
    }
  };

  const detailHandler = (event) => {
    window.location.href = `/${Id}/UserDetails`;
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const LinkStyles = {
    textDecoration: "none",
    margin: "0.5rem",
    color: "grey",
  };

  return (
    <div className={styles.wholenav}>
      <ReactBootsrtap.Navbar bg="light" expand="lg">
        <ReactBootsrtap.Container>
          <ReactBootsrtap.Navbar.Brand href="#home">
            <Link to={`/${Id}`} style={LinkStyles}>
              <img
                src={logo}
                alt="image not supported"
                height="50px"
                width="130px"
                style={{ display: "inline", padding: "0" }}
              />
            </Link>
          </ReactBootsrtap.Navbar.Brand>

          <ReactBootsrtap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootsrtap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootsrtap.Nav className="me-auto">
              <NavMini></NavMini>
              <ReactBootsrtap.Nav.Link onClick={detailHandler}>
                Details
              </ReactBootsrtap.Nav.Link>
              <Link to={"/"}>
                <ReactBootsrtap.Nav.Link>Log Out</ReactBootsrtap.Nav.Link>
              </Link>
            </ReactBootsrtap.Nav>
          </ReactBootsrtap.Navbar.Collapse>
        </ReactBootsrtap.Container>
      </ReactBootsrtap.Navbar>

      {/* <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100vw" }}
      >
        <div className="container-fluid">
          <Link to={`/${Id}`} style={LinkStyles}>
            <img
              src={logo}
              alt="image not supported"
              height="50px"
              width="130px"
              style={{ display: "inline", padding: "0" }}
            />
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
                {name}
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
                      <a className="dropdown-item" onClick={detailHandler}>Details</a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a className="dropdown-item">Log Out</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
