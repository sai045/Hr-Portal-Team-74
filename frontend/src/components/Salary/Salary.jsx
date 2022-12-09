import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import styles from "./salary.module.css";
import Table from "./table";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";

const Salary = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();
  const [Id, setId] = useState(id);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        `https://hr-portal-team-74.vercel.app/api/salary`
      );
      const responseData = await response.json();
      setData(responseData.obj);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  let renderLabel = (Data) => {
    return Data.department;
  };

  return (
    <div className={styles.salary}>
      <Navbar />
      <h2>Salary</h2>
      <div>
        {" "}
        <div className={styles.tab}>
          <Table />
        </div>
        <div className={styles.pie}>
          <h1 className={styles.heading}>Departments annualpay </h1>
          <div className={styles.p}>
            <PieChart width={400} height={300}>
              <Pie
                data={Data}
                dataKey="salary"
                outerRadius={100}
                label={renderLabel}
                fill="rgb(88 99 161)"
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
