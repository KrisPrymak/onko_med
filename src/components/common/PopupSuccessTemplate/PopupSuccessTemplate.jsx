import React, { useEffect } from "react";
import style from "./PopupSuccessTemplate.module.css";
import roundDone from "./../../../media/roundDone.svg";
import { Icon } from "@iconify/react";
import BlueButton from "../BlueButton/BlueButton";
import { formatDate, getTimeFromDate } from "../../../hooks/formatDate";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeItem } from "../../../store/employeeSlice";
import Preloader from "../Preloader/Preloader";

const PopupSuccessTemplate = ({text, subtext, handleClick, currentMeet}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEmployeeItem({id: currentMeet.employee, token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2ODExMTExNjEsImV4cCI6MTY4MzcwNjE2MX0.TDI0rY4rjCeX6FZafk5Fs-xv4CEdvogHo2B4vt6jDtU'}))
  }, [dispatch])
  const token = useSelector(state => state.auth.token)
const employee = useSelector(state => state.employee.employeeItem)
const fullname = `${employee.lastName} ${employee.firstName[0]}.${employee.patronymic[0]}`
  // const employee = useSelector(state => state.employee.employeeItem)
  // const fullname = `${employee?.lastName} ${employee?.firstName[0]}.${employee?.patronymic[0]}.`
  // // const fullname = `${employee?.lastName} ${employee?.firstName}.${employee?.patronymic}.`



  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <Icon icon="material-symbols:close" className={style.popup__cross} onClick={() => {handleClick(false)}}/>
                {!employee.lastName ? <Preloader /> : 
                <>
                <div>
                <img src={roundDone} alt="roundDone" />
                <h1 className={style.title}>{text}</h1>
                {subtext && 
                <p className={style.text}>
                  Вы записались на услугу. Талон будет зарезервирован за Вами до
                  <span className={style.date}> 13.01</span>. Вам надо оплатить услугу в регистратуре чтобы талон не
                  пропал.
                </p>}
                <div className={style.info}>
                  <p>
                    <Icon icon="carbon:result" className={style.info__icon} />
                    Прием (осмотр, консультация) врача-онколога первичный
                  </p>
                  <p>
                    <Icon
                      icon="healthicons:doctor-outline"
                      className={style.info__icon}
                    />
                    {fullname}
                  </p>
                  <p>
                    <Icon icon="ph:calendar-blank" className={style.info__icon} />
                    {formatDate(currentMeet.startDate)}; {getTimeFromDate(currentMeet.startDate)}
                  </p>
                </div>
                <div className={style.submitButton__desktop}>
                  <BlueButton width="100%" text="Перейти к услугам" handleClick={handleClick}/>
                </div>
                </div>
                </>}
        </div>
      </div>
    </div>
  );
};

export default PopupSuccessTemplate;
