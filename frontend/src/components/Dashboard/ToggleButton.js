import React from "react";
import { Input } from "reactstrap";
import styles from "./ToggleButton.module.css";
function ToggleButton() {
  const options = [
    { "Last 6 Days": " " },
    { "Last 1 Month": " " },
    { "Last 2 years": " " },
    { "Last 5 years": " " },
  ];
  return (
    <div className={styles.dropdownbtn}>
      <Input type="select" className={styles.select}>
        {options.map((option) => {
          return (
            <option value={Object.values(option)}>
              {" "}
              {Object.keys(option)}{" "}
            </option>
          );
        })}
      </Input>
    </div>
  );
}
export default ToggleButton;
