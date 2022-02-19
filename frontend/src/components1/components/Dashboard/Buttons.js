import styles from "./Buttons.module.css";
function Buttons(props) {
  const href = window.location.href;
  const href_elements = href.split("/");
  const id = href_elements[3];
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/${id}`, {
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
        <button className={styles.probutton}>Edit Profile</button>
      </span>
      <span className={styles.spanbtn}>
        <button
          className={styles.deletebutton}
          onClick={() => {
            sendRequest();
            window.location.assign(
              `https://mysterious-citadel-93609.herokuapp.com/`
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
