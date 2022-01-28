import React, { useState, useEffect } from "react";
import Details from "./Details";
import styles from "./Complaints.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";

const Complaints = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/complaints/");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setComplaints(responseData.complaints);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  const complaintDeleteHandler = (deletedComplaintId) => {
    setComplaints((prevComplaints) => {
      prevComplaints.filter((complaint) => complaint !== deletedComplaintId);
    });
  };
  return (
    <>
      <div>
      <Navbar />
        <Card className={styles.background}>
          <div className={styles.body}>
            <div>
              <h1 className={styles.heading}>Complaints</h1>
            </div>
            <div>
              {complaints.map((detail) => (
                <Details
                  key={detail._id}
                  name={detail.Name}
                  department={detail.Department}
                  complaint={detail.complaint}
                  id={detail._id.toString()}
                  onDelete={complaintDeleteHandler}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Complaints;
