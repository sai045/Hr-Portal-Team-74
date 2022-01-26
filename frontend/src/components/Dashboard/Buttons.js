import styles from "./Buttons.module.css";
function Buttons(props) {
  return (
    <div className={`${props.className} ${styles.btns}`}>
      <span className={styles.spanbtn}>
        <button className={styles.probutton}>Edit Profile</button>
      </span>
      <span className={styles.spanbtn}>
        <button className={styles.deletebutton}>Delete Account</button>
      </span>
    </div>
  );
}
export default Buttons;
