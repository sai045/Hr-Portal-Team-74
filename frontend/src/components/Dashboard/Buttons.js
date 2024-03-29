import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";
function Buttons(props) {
  const href = window.location.href;
  const href_elements = href.split("/");
  const id = href_elements[3];
  const sendRequest = async () => {
    try {
      const response = await fetch(`https://sai045-hr-portal-backend.onrender.com/api/auth/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(response.json().message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`${props.className} ${styles.btns}`}>
      <span className={styles.spanbtn}>
        <Link to={`/${id}/UserDetails`}>
          <button className={styles.probutton}>Edit Profile</button>
        </Link>
      </span>
      <span className={styles.spanbtn}>
        <button
          className={styles.deletebutton}
          onClick={() => {
            sendRequest();
            window.location.assign(
              `https://hr-portal-team-74-y1r7.vercel.app/`
            );
          }}
        >
          Delete Account
        </button>
      </span>
    </div>
  );
}
export default Buttons;
