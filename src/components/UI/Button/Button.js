import React from "react";
import classes from "./Button.module.css";
const button = props => (
  <button
    onClick={props.clicked}
    disabled={props.disabled}
    className={`${classes.Button} ${classes[props.btnType]}`}
  >
    {props.children}
  </button>
);

export default button;
