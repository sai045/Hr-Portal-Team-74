import React, { useState } from "react";
import Details from "./Details";
import styles from "./Complaints.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";

const Complaints = () => {
  const details = [
    {
      name: "Abeu Galvin",
      department: "Accounting",
      complaint: "Computers are giving trouble since so long",
    },
    {
      name: "Nealson Dorking",
      department: "Marketing",
      complaint: "Stock did not arrive yet",
    },
    {
      name: "Marcelle Sibyllina",
      department: "Services",
      complaint: "There isn't enough workspace in Services Department",
    },
    {
      name: "Ezmeralda Donaher",
      department: "Product Management",
      complaint: "My Salary didn't get debited",
    },
    {
      name: "Syman Squirrel",
      department: "Marketing",
      complaint:
        "Marketing manager is not in time and doesn't encourage our work ",
    },
    {
      name: "Clemmy Claybourn",
      department: "Product Management",
      complaint:
        "My team is not working effectively and are causing disturbance",
    },
    {
      name: "Gene Tottman",
      department: "Sales",
      complaint:
        "There is a delay in delivery customers are complaining about this",
    },
    {
      name: "Josephina Girth",
      department: "Accounting",
      complaint: "Accounting department manager is showing favouritism",
    },
    {
      name: "Vail Szymonowicz",
      department: "Legal",
      complaint: "I am being paid less, i am expecting a hike",
    },
    {
      name: "Lance Hamlin",
      department: "Support",
      complaint: "Proper cleanliness is not maintained in 4th floor",
    },

    {
      name: "Myriam Pregel",
      department: "Engineering",
      complaint:
        "My workload is increased where as other workers working hours are less ",
    },
    {
      name: "Torrance Inge",
      department: "Sales",
      complaint: "My Salary didn't get debited",
    },
  ];

  const [complaints, setComplaints] = useState(details);
  return (
    <>
      <Navbar />
      <body>
        <Card className={styles.background}>
          <div className={styles.body}>
            <div>
              <h1 className={styles.heading}>Complaints</h1>
            </div>
            <div>
              {complaints.map((detail) => (
                <Details
                  key={detail.name}
                  name={detail.name}
                  department={detail.department}
                  complaint={detail.complaint}
                  onRemove={() => {
                    var updatedComplaints = complaints.filter(
                      (complaint) => complaint.name !== detail.name
                    );
                    setComplaints(updatedComplaints);
                  }}
                />
              ))}
            </div>
          </div>
        </Card>
      </body>
    </>
  );
};

export default Complaints;
