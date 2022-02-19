import React, { useEffect, useState } from "react";
import styles from "./Complaints.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";
import Complaint from "./Complaint";
import NewComplaint from "./NewComplaint";
import LoadingSpinner from "../UI/LoadingSpinner";

const Complaints = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState(false);

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://mysterious-citadel-93609.herokuapp.com/api/complaints/");

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

  useEffect(() => {
    sendRequest();
  }, []);

  const submitHandler = (newComplaint) => {
    setNewComplaint(false);
    sendRequest();
  };

  const errorHandler = () => {
    setError(null);
  };

  const complaintDeleteHandler = (deletedComplaintId) => {
    setComplaints((prevComplaints) => {
      prevComplaints.filter((complaint) => complaint !== deletedComplaintId);
    });
  };

  const closeHandler = () => {
    setNewComplaint(false);
  };

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Navbar />
      <Card className={styles.background}>
        <button
          className={`btn btn-success ${styles.newComplaint}`}
          onClick={() => {
            setNewComplaint(true);
          }}
        >
          New Complaint
        </button>
        {newComplaint && (
          <NewComplaint onAdd={submitHandler} onClose={closeHandler} />
        )}
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
    </>
  );
};

export default Complaints;
