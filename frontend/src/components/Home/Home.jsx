import React, { Component } from "react";
// import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className={styles.home}>
          <Navbar />
          <div
            className={`col-sm-10 col-md-2 ${styles.sidebar} ${styles.sidenavbar}`}
          >
            <ul className={`nav navSidebar row ${styles.navSidenavbar}`}>
              {/* <Link to={`/`}>
                <li className="active">Home</li>
              </Link> */}
              <Link to={`/complaints`}>
                <li>Complaints</li>
              </Link>
              <Link to={`/salary`}>
                <li>Salary</li>
              </Link>
              <Link to={`/LeaveRequests`}>
                <li>Leave Requests</li>
              </Link>
            </ul>
          </div>
          <h1 className="p-4 m-0 text-center">Hey,User Name</h1>
          <p className="text-center">Human Resource Manager</p>
          <div className={`${styles.mid}`}>
            <div className="text-center">
              <Link to={`/dashboard`}>
                <button className={`${styles.icons}`}>
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_233159.svg"
                    alt=""
                    className={`img-rounded ${styles.symbols}`}
                  ></img>
                  <div className="p-2  text-center">DashBoard</div>
                </button>
              </Link>
              <Link to={`/Employee`}>
                <button className={`${styles.icons}`}>
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_549436.png"
                    alt=""
                    className={`img-rounded ${styles.symbols}`}
                  ></img>
                  <div className="p-2  text-center">Employees</div>
                </button>
              </Link>
              <Link to={`/Schedule`}>
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
                <Link to={`/TravelRequests`}>
                  <button className={`${styles.icons}`}>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/startup-business-10/70/tour__flight__travel__briefcase__bag-512.png"
                      alt=""
                      className={`${styles.smallSymbols} img-rounded p-4`}
                    ></img>
                    <div className="p-2  text-center">Travel Requests</div>
                  </button>
                </Link>
                <Link to={`/ApplicantPage`}>
                  <button className={`${styles.icons}`}>
                    <img
                      src="https://www.pinclipart.com/picdir/middle/40-402851_job-application-icon-clipart.png"
                      alt=""
                      className={`img-rounded ${styles.symbols}`}
                    ></img>
                    <div className="p-2  text-center">Applications</div>
                  </button>
                </Link>
                <Link to={`/Announcements`}>
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
  }
}
export default Home;
