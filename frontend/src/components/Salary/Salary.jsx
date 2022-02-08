import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import "./salary.css";
import Table from "./table";
import Navbar from "../Navbar/Navbar";

const Salary = () => {
  const [Data, setData] = useState([]);
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/salary`);
      const responseData = await response.json();
      console.log(responseData.obj);
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
    <div className="salary">
      <Navbar />
      <h2>Salary</h2>
      <div>
        {" "}
        <div className="tab">
          <Table />
        </div>
        <div className="pie">
          <h1 className="heading">Departments annualpay </h1>
          <div className="p">
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
