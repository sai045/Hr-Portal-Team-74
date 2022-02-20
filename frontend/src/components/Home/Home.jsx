import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const [Id, SetId] = useState(id);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        `https://mysterious-citadel-93609.herokuapp.com/api/${Id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
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

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <div
          className={`col-sm-10 col-md-2 ${styles.sidebar} ${styles.sidenavbar}`}
        >
          <ul className={`nav navSidebar row ${styles.navSidenavbar}`}>
            <Link to={`/${Id}/complaints/`}>
              <li>Complaints</li>
            </Link>
            <Link to={`/${Id}/salary`}>
              <li>Salary</li>
            </Link>
            <Link to={`/${Id}/LeaveRequests`}>
              <li>Leave Requests</li>
            </Link>
          </ul>
        </div>
        <h1 className="p-4 m-0 text-center">Hey,{name}</h1>
        <p className="text-center">Human Resource Manager</p>
        <div className={`${styles.mid}`}>
          <div className="text-center" style={{ padding: "0.8rem 0" }}>
            <Link to={`/${Id}/dashboard`}>
              <button className={`${styles.icons}`}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_233159.svg"
                  alt=""
                  className={`img-rounded ${styles.symbols}`}
                ></img>
                <div className="p-2  text-center">DashBoard</div>
              </button>
            </Link>
            <Link to={`/${Id}/Employee`}>
              <button className={`${styles.icons}`}>
                <img
                  src="https://cdn.onlinewebfonts.com/svg/img_549436.png"
                  alt=""
                  className={`img-rounded ${styles.symbols}`}
                ></img>
                <div className="p-2  text-center">Employees</div>
              </button>
            </Link>
            <Link to={`/${Id}/Schedule`}>
              <button className={`${styles.icons}`}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_189017.png"
                  alt=""
                  className={`img-rounded ${styles.symbols}`}
                ></img>
                <div className="p-2  text-center">Schedule</div>
              </button>
            </Link>
            <div className="text-center">
              <Link to={`/${Id}/TravelRequests`}>
                <button className={`${styles.icons}`}>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/startup-business-10/70/tour__flight__travel__briefcase__bag-512.png"
                    alt=""
                    className={`${styles.smallSymbols} img-rounded p-4`}
                  ></img>
                  <div className="p-2  text-center">Travel Requests</div>
                </button>
              </Link>
              <Link to={`/${Id}/ApplicantPage`}>
                <button className={`${styles.icons}`}>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/staff-management-vol-1/72/34-512.png"
                    alt=""
                    className={`img-rounded ${styles.symbols}`}
                  ></img>
                  <div className="p-2  text-center">Applications</div>
                </button>
              </Link>
              <Link to={`/${Id}/Announcements`}>
                <button className={`${styles.icons}`}>
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_456677.png"
                    alt=""
                    className={`${styles.smallSymbols} img-rounded p-4`}
                  ></img>
                  <div className="p-2  text-center">Announcements</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
