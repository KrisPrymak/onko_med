import React from "react";
import style from "./ButtonEnter.module.css";
import LoginIcon from "@mui/icons-material/Login";
import {NavLink} from "react-router-dom";

const ButtonEnter = ({text, navLink}) => {
  return (
    <NavLink to={navLink} className={style.auth__button}>
      <LoginIcon fontSize="small" />

      <span className={style.auth__text}>{text}</span>
    </NavLink>
  );
};

export default ButtonEnter;
