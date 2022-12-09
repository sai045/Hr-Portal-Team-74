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
import { useEffect, useMemo, useState } from "react";

const ChartBar = () => {
  const [days, setDays] = useState(6);
  const [leaves, setLeaves] = useState(0);
  const [applicants, setApplicants] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [travels, setTravels] = useState(0);
  const sendRequest = async () => {
    try {
      const response = await fetch(
        "https://hr-portal-team-74.vercel.app/api/dashboard/get",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            days,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setLeaves(responseData.leaves_count);
      setApplicants(responseData.schedule_count);
      setEmployees(responseData.employee_count);
      setTravels(responseData.travel_count);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sendRequest();
  }, [days, leaves, applicants, employees, travels]);   

  const data = [
    { name: "Interviews", value: applicants },
    { name: "Employees", value: employees },
    { name: "Leaves", value: leaves },
    { name: "Travels", value: travels },
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
