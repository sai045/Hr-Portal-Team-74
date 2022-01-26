import Buttons from "./Buttons";
import styles from "./DashHead.module.css";
function DashHead(props) {
  return (
    <div>
      <h1 className={`${props.className} ${styles.head}`}>Dashboard</h1>
    </div>
  );
}
export default DashHead;
