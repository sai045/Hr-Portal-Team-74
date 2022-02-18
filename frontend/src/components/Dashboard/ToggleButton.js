import React from "react";
import { Input } from "reactstrap";
import styles from "./ToggleButton.module.css";
const ToggleButton = (props) => {
  const optionHandler = (event) => {
    props.setDays(event.target.value);
    props.sendRequest();
  };
  return (
    <div className={styles.dropdownbtn}>
      <Input type="select" className={styles.select} onChange={optionHandler}>
        <option value="6">Last 6 Days</option>
        <option value="30">Last 1 Month</option>
        <option value="730">Last 2 years</option>
        <option value="1460">Last 4 years</option>
      </Input>
    </div>
  );
};
export default ToggleButton;
