import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const [dashboard, setDashboard] = useState();
  const [employeeName, setEmployeeName] = useState("");
  const { id } = useParams();
  const [Id, setId] = useState(id);
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/employee/${Id}`);
      const responseData = await response.json();
      setDashboard(responseData.employee);
      const name = responseData.employee.name;
      setEmployeeName(name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const deleteHandler = async () => {
    const response = await fetch(`http://localhost:5000/employee/${Id}`, {
      method: "DELETE",
    });
    window.location.assign(`http://localhost:3000/Employee`);
  };

  return (
    <>
      <h1>Hi {employeeName}</h1>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default EmployeeDashboard;
