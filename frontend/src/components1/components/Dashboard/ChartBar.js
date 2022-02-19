import styles from "./ChartBar.module.css";
import ToggleButton from "./ToggleButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";

const ChartBar = () => {
  const [days, setDays] = useState(6);
  const [leaves, setLeaves] = useState(0);
  const [applicants, setApplicants] = useState(0);
  const sendRequest = async () => {
    try {
      const response = await fetch("https://mysterious-citadel-93609.herokuapp.com/api/dashboard/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          days,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setLeaves(responseData.leaves_count);
      setApplicants(responseData.schedule_count);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sendRequest();
  }, [days]);
  const data = [
    { name: "Applications", value: applicants },
    { name: "Employees", value: 5 },
    { name: "Leaves", value: leaves },
    { name: "Resignations", value: 4 },
  ];

  return (
    <div className={styles.graphbody}>
      <h2>Records</h2>
      <BarChart
        width={520}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="value"
          fill=" rgb(88 99 161)"
          background={{ fill: "#eee" }}
        />
      </BarChart>
      <ToggleButton setDays={setDays} sendRequest={sendRequest} />
    </div>
  );
};
export default ChartBar;
