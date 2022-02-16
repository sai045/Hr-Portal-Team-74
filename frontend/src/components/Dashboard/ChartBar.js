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

const ChartBar = () => {
  const data = [
    { name: "Applications", value: 60 },
    { name: "Employees", value: 95 },
    { name: "Leaves", value: 40 },
    { name: "Resignations", value: 45 },
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
      <ToggleButton />
    </div>
  );
};
export default ChartBar;
