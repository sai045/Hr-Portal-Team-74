import React, { useEffect, useState } from "react";
import styles from "./Complaints.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";
import Complaint from "./Complaint";
import NewComplaint from "./NewComplaint";

const Complaints = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [complaints, setComplaints] = useState([]);
  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/complaints/");

      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // console.log(responseData.complaints);
      setComplaints(responseData.complaints);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
  useEffect(() => {
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
        {/* <NewComplaint /> */}
          <div className={styles.body}>
            <div>
              <h1 className={styles.heading}>Complaints</h1>
            </div>
            <div>
              {complaints.map((detail) => (
                <Complaint
                  key={detail._id}
                  name={detail.Name}
                  department={detail.Department}
                  complaint={detail.complaint}
                  id={detail._id.toString()}
                  onDelete={complaintDeleteHandler}
                  sendRequest={sendRequest}
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
