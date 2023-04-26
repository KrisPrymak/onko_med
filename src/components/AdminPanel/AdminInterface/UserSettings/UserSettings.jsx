import s from "./UserSettings.module.css";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBack from "../../../common/ButtonBack/ButtonBack";
import { TabTitle } from "../../../common/TabTitle/TabTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfUser, fetchUserList, updateUser } from "../../../../store/UserSlice";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import Preloader from "../../../common/Preloader/Preloader";

export const UserSettings = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList)
  const curUser = userList.filter((user) => user.id === +params.id)[0]
  const status = useSelector(state => state.user.status)
 
  const token = useSelector((state) => state.auth.token);
  const [checked, setChecked] = useState(false);

  const onSubmitHandler = () => {
    // console.log('user changed')
  };

  const [firstName, setFirstName] = useState(curUser.firstName);
  const [lastName, setLastName] = useState(curUser.lastName);
  const [patronymic, setPatronymic] = useState(curUser.patronymic);
  const [email, setEmail] = useState(curUser.email);
  const [birthday, setBirthday] = useState(new Date(curUser.birthday));
  const [phoneNumber, setPhoneNumber] = useState(curUser.phoneNumber);
  const [address, setAddress] = useState(curUser.address);

  useEffect(() => {
    dispatch(fetchUserList(token))
  }, [dispatch])
  

  const handleSaveData = () => {
    dispatch(updateUser([+params.id,token,{firstName,lastName,patronymic,email,birthday,phoneNumber,address,},]));
    navigate('/admin/usersManagment')
  };

  const handleDownload = () => {
    dispatch(fetchPdfUser([{login: email}, token]))
  }
  return (
    <>
      <TabTitle title={"Пользователь"} />
      {status === "pending" ? (
        <Preloader />
      ) :
      <>
      <div className={s.buttonBack}>
        <div style={{ marginTop: "50px" }}>
          <ButtonBack handleClick={() => navigate('/admin/usersManagment')} />
        </div>
      </div>
      <h2 className={s.formTitle}>ID пользователя: {curUser.id}</h2>
      <form onSubmit={onSubmitHandler}>
        <div className={s.formGridContainer}>
          <div className={s.inputContainer}>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Фамилия"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
          <div className={s.inputContainer}>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="Имя"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
          <div className={s.inputContainer}>
            <TextField
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              label="Отчество"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
          <div className={s.inputContainer}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
          <div className={s.inputContainer}>
          <DatePicker  value={dayjs(birthday)} onChange={(e) => setBirthday(e.$d)} label="Дата рождения" placeholder='Дата рождения'  format="DD.MM.YYYY"/>
          </div>
          <div className={s.inputContainer}>
            <TextField
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="Номер телефона"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
          <div style={{ width: "715px" }}>
            <TextField
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              label="Адрес"
              variant="outlined"
              size={"small"}
              sx={styleSX.input}
            />
          </div>
        </div>
        <div className={s.buttonContainer} onClick={handleSaveData}>
          <Button
            type={"submit"}
            variant={"contained"}
            size={"large"}
            color={"primary"}
            sx={styleSX.button}
          >
            Сохранить изменения
          </Button>
        </div>
      </form>
      <form className={s.changePasswordForm}>
        <h2 className={s.formTitle}>Выдача пароля</h2>
        <div>
          <span>Новый пароль:</span>
          <span className={s.password}>81822Hb111</span>
        </div>
        <label className={s.checkboxGroup}>
          <input
            type="checkbox"
            className={s.checkbox}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className={s.checkboxText}>Подтвердить действие</span>
        </label>
        <div className={s.buttons}>
          <div className={s.buttonContainer}>
            <Button
              variant={"contained"}
              disabled={!checked}
              sx={styleSX.button}
            >
              Обновить пароль
            </Button>
          </div>
          <div className={s.buttonContainer} onClick={handleDownload}>
            <Button variant={"outlined"} sx={styleSX.button}>
              Скачать PDF
            </Button>
          </div>
        </div>
      </form></>}
    </>
  );
};

const styleSX = {
  button: {
    width: "100%",
    height: "100%",
    textTransform: "none",
    fontWeight: "700",
  },
  input: {
    width: "100%",
  },
};
