import React from "react";
import style from "./PaidConsultsPage.module.css";
import { Icon } from "@iconify/react";
import { Button, Select } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "../Check/Check";

const PaidConsultsPage = ({ consultsList }) => {
  const buttonStyle = {
    fontFamily: `"Tahoma", "Verdana", sans-serif`,
    textTransform: "none",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "1.19",
    backgroundColor: "#2C60E3",
    boxShadow: "0px 4px 20px 1px rgba(44, 96, 227, 0.25)",
    width: "160px",
    padding: "12px",
    color: "#FFFFFF",
    
  };
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.form__select}>
          <Select
            IconComponent={ExpandMoreIcon}
            variant="outlined"
            value="Период"
          ></Select>
        </div>
        <div className={style.form__buttons}>
        {["Word", "Excel"].map((b) => (
          <Button key={b.id} startIcon={<Icon icon="material-symbols:download" color="white" />} variant="contained" style={buttonStyle}>
            {b}
          </Button>
        ))}
        </div>
      </div>
      <Check consultsList={consultsList} btnText='Оплачено' btnColor='#20AD25' disabled={true}/>
    </div>
  );
};

export default PaidConsultsPage;
