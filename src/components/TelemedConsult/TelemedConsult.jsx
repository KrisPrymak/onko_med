import React, { useEffect, useState } from "react";
import style from "./TelemedConsult.module.css";

import PopupSignUpConsult from "./PopupSignUpConsult/PopupSignUpConsult";
import PopupRescheduleConsult from "./PopupRescheduleConsult/PopupRescheduleConsult";
import PopupCancelQuest from "./PopupCancelQuest/PopupCancelQuest";
import PopupCancelSuccess from "./PopupCancelSuccess/PopupCancelSuccess";
import {useDispatch, useSelector} from "react-redux";
import PopupSuccessTemplate from "../common/PopupSuccessTemplate/PopupSuccessTemplate";
import DropDownList from "../common/DropDownList/DropDownList";
import BlueButton from "../common/BlueButton/BlueButton";
import { deleteConsultItem, fetchConsultsForUser } from "../../store/ConsultsSlice";
import { useNavigate } from "react-router-dom";
import {TabTitle} from '../common/TabTitle/TabTitle';
import ConsultItem from "./ConsultItem/ConsultItem";
import { formatDate, getTimeFromDate } from "../../hooks/formatDate";


const TelemedConsult = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.id)
  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchConsultsForUser([userId, token]))
  }, [dispatch])

  const consultsData = useSelector(
    (state) => state.consults.consultsList
  );

  const [isAccess] = useState(true);
  const [consultType, setConsultType] = useState("planedConsult");

  const removeConsult = (id) => {
    dispatch(deleteConsultItem([id, token]))
    setIsFirstRemoveConsult({ isOpen: false, id: null });
    setIsRemovedSuccess(true);
  };

  const selectConsultType = (event) => {
    setConsultType(event.target.value);
  };

  //popup state
  const [isRescheduleSuccess, setIsRescheduleSuccess] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenRescheduleConsult, setIsOpenRescheduleConsult] = useState({
    isOpen: false,
    id: null,
  });
  const [isFirstRemoveConsult, setIsFirstRemoveConsult] = useState({
    isOpen: false,
    id: null,
  });
  const [isRemovedSuccess, setIsRemovedSuccess] = useState(false);

  //popup set state

  const [currentMeet, setCurrentMeet] = useState()

  const rescheduleSuccess = (data) => {
    setIsOpenRescheduleConsult({
      isOpen: false,
      id: null,
    });
    setIsRescheduleSuccess(true);
    setCurrentMeet(data)
  };
  const openSignUpSuccess = () => {
    setIsSignUpSuccess(true);
    setIsOpenSignUp(false);
  };

  const closeAllModal = () => {
    setIsRescheduleSuccess(false);
    setIsFirstRemoveConsult({ isOpen: false, id: null });
    setIsRemovedSuccess(false);
    setIsSignUpSuccess(false);
  };

  return (
    <div>
      {isRemovedSuccess && <PopupCancelSuccess closeAllModal={closeAllModal} />}
      {isFirstRemoveConsult.isOpen && (
        <PopupCancelQuest
          closeAllModal={closeAllModal}
          removeConsult={removeConsult}
          id={isFirstRemoveConsult.id}
        />
      )}
      {isOpenSignUp && (
        <PopupSignUpConsult
          setIsOpenSignUp={setIsOpenSignUp}
          openSignUpSuccess={openSignUpSuccess}
          setCurrentMeet={setCurrentMeet}
        />
      )}
      {isOpenRescheduleConsult.isOpen && (
        <PopupRescheduleConsult
          rescheduleSuccess={rescheduleSuccess}
          setIsOpenRescheduleConsult={setIsOpenRescheduleConsult}
          isOpenRescheduleConsult={isOpenRescheduleConsult}
        />
      )}
      {isRescheduleSuccess && (
        <PopupSuccessTemplate
          text="Перенос записи на консультацию сделан"
          textButton="Перейти к консультации"
          handleClick={closeAllModal}
          currentMeet={currentMeet}
        />
      )}
      {isSignUpSuccess && (
        <PopupSuccessTemplate
          text="Запись на консультацию сделана"
          handleClick={closeAllModal}
          currentMeet={currentMeet}
        />
      )}
      <TabTitle title="Телемедицинские консультации"/>
      <div className={style.content}>
        <DropDownList
          handleChange={selectConsultType}
          first={{
            value: "planedConsult",
            text: "Запланированные консультации",
          }}
          second={{ value: "doneConsult", text: "Проведённые консультации" }}
        />

        <BlueButton
          disabled={!isAccess}
          text="Новая консультация"
          width="350px"
          handleClick={setIsOpenSignUp}
          height="48px"
        />

        {isAccess ? (
          consultType === "planedConsult" ? (
            consultsData.map((consult) => {
              return (
                !consult.held &&
                <ConsultItem consult={consult} setIsOpenRescheduleConsult={setIsOpenRescheduleConsult} setIsFirstRemoveConsult={setIsFirstRemoveConsult}/>
              );
            })
          ) : (
            <div className={style.telemed__doneConsults}>{consultsData.map((consult) => {
              return (
                consult.held && <div>Консультация с айди {consult.id} проведена {formatDate(consult.startDate)} в {getTimeFromDate(consult.startDate)}</div>
              )
            })}</div>
          )
        ) : (
          <div className={style.telemed__accessProhibit}>
            В данный момент Вам не доступны телемедицинские консультации. Чтобы
            получить доступ, Вам надо один раз очно посетить специалиста, к
            которому Вы хотите попасть на телеконсультацию.
          </div>
        )}
      </div>
    </div>
  );
};

export default TelemedConsult;
