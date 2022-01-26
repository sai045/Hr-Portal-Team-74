import Buttons from "./Buttons";
import DashHead from "./DashHead";
import LittleBoxes from "./LittleBoxes";
import ChartBar from "./ChartBar";
import ToggleButton from "./ToggleButton";
import Chart from "./Chart";
import styles from "./Dash.module.css";
import Navbar from "../Navbar/Navbar";

function Dash() {
  return (
    <div>
      <Navbar />
      <div className={` m-4 p-4 ${styles.dashHead}`}>
        <DashHead className="m-2" />
        <Buttons className="mt-2 mx-2" />
      </div>
      {/* <DashHead />
      <Buttons /> */}
      <LittleBoxes />
      <div className={styles.chart}>
        <Chart />
      </div>
      <ChartBar />
      {/* <ToggleButton className="" /> */}
    </div>
  );
}
export default Dash;
