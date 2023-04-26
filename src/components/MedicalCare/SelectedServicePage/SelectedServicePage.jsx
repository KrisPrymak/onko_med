import {
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import style from "./SelectedServicePage.module.css";
import { Stack } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import PopupSuccessTemplate from "../../common/PopupSuccessTemplate/PopupSuccessTemplate";
import BlueButton from "../../common/BlueButton/BlueButton";

const SelectedServicePage = ({ id, medicalCares, closePage }) => {
  const [isReservSuccess, setIsReservSuccess] = useState(false);
  return (
    <div>
      {isReservSuccess && (
        <PopupSuccessTemplate
          handleClick={closePage}
          text="Запись на услугу сделана"
          subtext="true"
        />
      )}
      <ButtonBack handleClick={closePage}/>
      {medicalCares.map((d) => {
        if (d.id === id) {
          const cost = d.price === 0 ? "Бесплатно" : `${d.price} рублей`;
          return (
            <div key={d.id}>
              <h1 className={style.title}>{d.name}</h1>
              <div className={style.selectInputs}>
                <FormControl sx={{ width: { xs: "344px", md: "255px" } }}>
                  <span className={style.selectInputs__title}>Врач</span>
                  <Select displayEmpty IconComponent={ExpandMoreIcon}>
                    <MenuItem>Полетаев Н.A.</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  sx={{
                    width: { xs: "154px", md: "255px" },
                    mt: { xs: "10px", md: "0" },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ width: "100px" }}
                  >
                    <Stack>
                      <span className={style.selectInputs__title}>Дата</span>
                      <DesktopDatePicker
                        IconComponent={ExpandMoreIcon}
                        inputFormat="MM.DD.YYYY"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </FormControl>
                <FormControl
                  IconComponent={ExpandMoreIcon}
                  sx={{
                    width: { xs: "154px", md: "160px" },
                    mt: { xs: "10px", md: "0" },
                  }}
                >
                  <span className={style.selectInputs__title}>Время</span>
                  <TextField
                    IconComponent={ExpandMoreIcon}
                    id="time"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ width: 160 }}
                  />
                </FormControl>
              </div>
              <div className={style.info}>
                <ul className={style.info__first}>
                  <li>Профиль врача:</li>
                  <li>Стоимость услуги:</li>
                  <li>Место оказания:</li>
                  <li>Подготовка к приему:</li>
                </ul>
                <ul className={style.info__second}>
                  <li>Онколог</li>
                  <li>{cost}</li>
                  <li>Кабинет</li>
                  <li>-</li>
                </ul>
              </div>
              <div className={style.submitButton}>
                <BlueButton
                  handleClick={() => setIsReservSuccess(true)}
                  text="Записаться на услугу"
                  width="100%"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SelectedServicePage;

// {
//     id: 1011,
//     text: "Прием (осмотр, консультация) врача-онколога первичный",
//     cost: 500,
//     doctorProfile: "Врач-онколог",
//     place: "1 корпус, 2 этаж, 205 кабинет",
//   },
