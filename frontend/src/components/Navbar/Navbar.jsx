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
      const response = await fetch("https://sai045-hr-portal-backend.onrender.com/api/${Id}");
      const responseData = await response.json();
      console.log(responseData)
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
            <ReactBootsrtap.Nav className={styles.meAuto}>
              <NavMini username={name}></NavMini>
              <ReactBootsrtap.Nav.Link onClick={detailHandler}>
                Details
              </ReactBootsrtap.Nav.Link>
              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
              >
                <ReactBootsrtap.Nav.Link>Log Out</ReactBootsrtap.Nav.Link>
              </Link>
            </ReactBootsrtap.Nav>
          </ReactBootsrtap.Navbar.Collapse>
        </ReactBootsrtap.Container>
      </ReactBootsrtap.Navbar>
    </div>
  );
};

export default Navbar;
