import React, { useEffect, useState } from "react";
import style from "./PopupSignUpConsult.module.css";
import { Icon } from "@iconify/react";
import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import SelectInput from "../../common/SelectInput/SelectInput";
import BlueButton from "../../common/BlueButton/BlueButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../store/employeeSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { createConsultItem } from "../../../store/ConsultsSlice";
import Preloader from '../../common/Preloader/Preloader';

const PopupSignUpConsult = ({ setIsOpenSignUp, openSignUpSuccess,setCurrentMeet }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.id);

  const employeeList = useSelector((state) => state.employee.employeeList);
  const status = useSelector((state) => state.employee.status);
  const createStatus = useSelector((state) => state.employee.createStatus);

  useEffect(() => {
    dispatch(fetchEmployees(token));
  }, [dispatch]);

  const [referral, setReferral] = useState(null)
  const [employee, setEmployee] = useState(null)
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [comment, setComment] = useState()

  let startDate = new Date().toISOString()

const handleSignUp = () => {
  dispatch(createConsultItem({employeeId: employee, userId, startDate, comment, token }))
    openSignUpSuccess()
    setCurrentMeet({employee, startDate})
}

  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        {createStatus === 'pending' ? <Preloader /> : <div className={style.popup__content}>
          <Icon
            icon="material-symbols:close"
            className={style.popup__cross}
            onClick={() => setIsOpenSignUp(false)}
          />
          <div className={style.popup__info}>
            <h1 className={style.popup__title}>
              Запись на телемедицинскую консультацию
            </h1>
            {status === 'pending' ? <Preloader /> : 
            <div className={style.popup__info_main}>
              <p className={style.popup__description}>
                Дни и часы для онлайн-консультаций каждого специалиста
                индивидуальны и ограничены в количестве.
              </p>


              <form className={style.popup__form}>


                <FormControl sx={{ width: "47%" }}>
          <span style={{ fontWeight: "900" }}>Направление</span>
          <Select
          sx={{width: '100%'}}
            onChange={(e) => {setReferral(e.target.value)}}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={1} name='Направление 1'>Направление № 1</MenuItem>
          </Select>
        </FormControl>


        <FormControl sx={{ width: "47%" }}>
          <span style={{ fontWeight: "900" }}>Врач</span>
          <Select
            onChange={(e) => {setEmployee(e.target.value)}}
            IconComponent={ExpandMoreIcon}
           disabled={!referral}
          >
            {employeeList.map(employee => {
              return (
                <MenuItem key={employee.id} value={employee.id}>{employee.lastName} {employee.firstName} {employee.patronymic}</MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ width: "350px" }}>
          <span style={{ fontWeight: "900" }}>Дата</span>
          <Select
            onChange={(e) => setDate(e.target.value)}
            IconComponent={ExpandMoreIcon}
            disabled={!employee}
          >
            <MenuItem value={1}>Вчера</MenuItem>
            <MenuItem value={2}>Сегодня</MenuItem>
            <MenuItem value={3}>Завтра</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "47%" }}>
          <span style={{ fontWeight: "900" }}>Время</span>
          <Select
            onChange={(e) => setTime(e.target.value)}
            IconComponent={ExpandMoreIcon}
            disabled={!date}
          >
            <MenuItem value={1}>Утро</MenuItem>
            <MenuItem value={2}>День</MenuItem>
            <MenuItem value={3}>Вечер</MenuItem>
          </Select>
        </FormControl>

                <FormControl style={{ width: "100%", marginTop: "15px" }}>
                  <span className={style.popup__select_title}>Комментарий</span>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </FormControl>
              </form>
              <div className={style.popup__buttonSubmit}>
                <BlueButton
                  text="Записаться на консультацию"
                  handleClick={handleSignUp}
                  width="100%"
                  disabled={!referral || !employee || !date || !time}
                />
              </div>
            </div>}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default PopupSignUpConsult;
