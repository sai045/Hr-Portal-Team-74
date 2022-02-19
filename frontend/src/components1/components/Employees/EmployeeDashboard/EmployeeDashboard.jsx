import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Leaves from "./Leaves";
import styles from "./EmployeeDashboard.module.css";
import Navbar from "../../Navbar/Navbar";
import Card from "../../UI/Card";
import Travel from "./Travel";

const EmployeeDashboard = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);
  const { eid, id } = useParams();
  const [ID, setId] = useState(eid);
  const [Id, setID] = useState(id);

  const sendRequest = async () => {
    try {
      const response = await fetch(`https://mysterious-citadel-93609.herokuapp.com/api/employee/${ID}`);
      const responseData = await response.json();
      const name = responseData.employee.name;
      const S = responseData.employee.salary;
      const d = responseData.employee.department;
      setDepartment(d);
      setSalary(S);
      setEmployeeName(name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const deleteHandler = async () => {
    const response = await fetch(`https://mysterious-citadel-93609.herokuapp.com/api/employee/${ID}`, {
      method: "DELETE",
    });
    window.location.assign(`https://mysterious-citadel-93609.herokuapp.com/${Id}/Employee`);
  };

  return (
    <>
      <Navbar />
      <Card>
        <h1 className={`m-4`}>Hi {employeeName}</h1>
        <p>Department: {department}</p>
        <p>Salary: {salary}</p>
        <div className={styles.tTable}>
          <h1 className={`m-4`}>Travel Request</h1>
          <Travel />
        </div>
        <div className={styles.lTable}>
          <h1 className={`m-4`}>Leave Request</h1>
          <Leaves />
        </div>
        <button onClick={deleteHandler} className={`m-4`}>
          Delete Employee
        </button>
      </Card>
    </>
  );
};

export default EmployeeDashboard;
