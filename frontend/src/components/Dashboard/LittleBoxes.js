import styles from "./LittleBoxes.module.css";
function LittleBoxes() {
  return (
    <div>
      <ul className={styles.allboxes}>
        <div className={styles.infobox}>
          <li className={styles.Intertdy}>
            Interviews Today<h1>27</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.newcndts}>
            New Candidates<h1>13</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.vcncs}>
            Vacancies<h1>40</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.aplcns}>
            Applications<h1>382</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.totemp}>
            Total Employees<h1>1845</h1>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default LittleBoxes;
