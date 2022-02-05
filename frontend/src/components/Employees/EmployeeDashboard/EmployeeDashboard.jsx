import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const [travels, setTravels] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const { id } = useParams();
  const [Id, setId] = useState(id);
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/employee/${Id}`);
      const responseData = await response.json();
      const name = responseData.employee.name;
      const travel = responseData.employee.travelRequests;
      setTravels(travel);
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
      <h1>Travels</h1>
      <div>{travels}</div>
    </>
  );
};

export default EmployeeDashboard;
