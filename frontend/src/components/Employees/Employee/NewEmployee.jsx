import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./NewEmployee.module.css";

const NewEmployee = (props) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(0);
  const [working_hours, setWorking_hours] = useState(0);

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/employee/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          department,
          email,
          salary,
          working_hours,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        // console.log(responseData.message);
        throw new Error(responseData.message);
      }
    } catch (err) {
      props.onError(err);
    }
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const departmentHandler = (event) => {
    setDepartment(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const salaryHandler = (event) => {
    setSalary(event.target.value);
  };
  const working_hoursHandler = (event) => {
    setWorking_hours(event.target.value);
  };
  const newEmployeeHandler = (event) => {
    sendRequest();
    event.preventDefault();
    const NewEmployee = {
      name,
      department,
      email,
      salary,
      working_hours,
    };
    props.onAdd(NewEmployee);
    setName("");
    setDepartment("");
    setEmail("");
    setSalary(0);
    setWorking_hours(0);
    console.log(NewEmployee);
  };

  return (
    <>
      <Card className={`${styles.Card} m-4`}>
        <button onClick={props.onClose} className={styles.closeButton}>
          <i className="fas fa-window-close">Close</i>
        </button>
        <div className="m-4">
          <h1 className={styles.heading}>New Employee</h1>
        </div>
        <form
          action=""
          onSubmit={newEmployeeHandler}
          className={`m-2 p-4 ${styles.newEmployeeForm}`}
        >
          <label htmlFor="Name">Name : </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Enter your name"
            value={name}
            onChange={nameHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="department">department : </label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Enter your department"
            value={department}
            onChange={departmentHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your desired email"
            value={email}
            onChange={emailHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="salary">Salary : </label>
          <input
            type="number"
            name="salary"
            id="salary"
            placeholder="Enter your salary"
            value={salary}
            onChange={salaryHandler}
            required
          />
          <br />
          <br />
          <label htmlFor="working_hours">Working Hours : </label>
          <input
            type="number"
            name="working_hours"
            id="working_hours"
            placeholder="Working Hours"
            value={working_hours}
            onChange={working_hoursHandler}
            required
          />
          <br />
          <br />
          <button type="submit" className={`m-4`}>
            Submit Employee
          </button>
        </form>
      </Card>
    </>
  );
};

export default NewEmployee;
