import React from "react";
import style from "./HeaderMobile.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const HeaderMobile = () => {
  return (
    <header className={style.header__mobile}>
      <span className={style.header__mobileLogo}>Сккод</span>
      <div>
        <IconButton>
          <MenuIcon color="primary"></MenuIcon>
        </IconButton>
      </div>
    </header>
  );
};

export default HeaderMobile;
