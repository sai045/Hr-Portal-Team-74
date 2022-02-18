import { PieChart, Pie, Tooltip } from "recharts";
import styles from "./chart.module.css";
import { useEffect, useState } from "react";

const Chart = (props) => {
  const [data, setData] = useState([]);

  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/dashboard`);
      const responseData = await response.json();
      setData(responseData.obj);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className={`${props.className} ${styles.PieBody}`}>
      <h2 className={`mx-2`}>Department Ratios</h2>
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
