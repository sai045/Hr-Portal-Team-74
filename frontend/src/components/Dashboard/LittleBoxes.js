import { useEffect, useState } from "react";
import styles from "./LittleBoxes.module.css";

function LittleBoxes() {
  const [applicants, setApplicants] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [vacancies, setVacancies] = useState(0);
  const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/dashboard`);
      const responseData = await response.json();
      setApplicants(responseData.Applicants);
      setEmployees(responseData.Employees);
      setVacancies(responseData.vacancies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

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
            Vacancies<h1>{vacancies}</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.aplcns}>
            Applications<h1>{applicants}</h1>
          </li>
        </div>
        <div className={styles.infobox}>
          <li className={styles.totemp}>
            Total Employees<h1>{employees}</h1>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default LittleBoxes;
