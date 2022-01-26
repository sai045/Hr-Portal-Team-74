import { PieChart, Pie, Tooltip } from "recharts";
import styles from "./chart.module.css";

const Chart = (props) => {
  const data = [
    { name: "Dept-1", value: 47 },
    { name: " Dept-2", value: 62 },
    { name: " Dept-3", value: 77 },
    { name: " Dept-4", value: 82 },
  ];

  return (
    <div className={`${props.className} ${styles.PieBody}`}>
      <h2>Department Ratios</h2>
      <PieChart width={300} height={310}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="rgb(88 99 161)"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};
export default Chart;
