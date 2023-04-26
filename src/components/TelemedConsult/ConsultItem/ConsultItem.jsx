import React, { useEffect } from 'react';
import style from './ConsultItem.module.css';
import BlueButton from '../../common/BlueButton/BlueButton';
import { Button } from '@material-ui/core';
import { formatDate, getTimeFromDate } from '../../../hooks/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../../store/employeeSlice';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const ConsultItem = ({consult, setIsOpenRescheduleConsult, setIsFirstRemoveConsult}) => {
    const buttonStyleBlue = consult.today
                ? stylesSX.buttonDisabled
                : stylesSX.buttonChange;
              const buttonStyleRed = consult.today
                ? stylesSX.buttonDisabled
                : stylesSX.buttonCancel;
    
    
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(fetchEmployees(token))
    }, [dispatch])

    const employeeList = useSelector(state => state.employee.employeeList)
    const currentEmployee = employeeList.filter(a => a.id === consult.employeeId)[0]
    const fullname = `${currentEmployee?.lastName} ${currentEmployee?.firstName[0]}.${currentEmployee?.patronymic[0]}.`

    return (
        <div className={style.content__listItem} key={consult.id}>
                  <li className={style.consultTemplate}>
                    <h2 className={style.consultTemplate__title}>Консультация "{currentEmployee?.qualification}"</h2>
                    <div className={style.consultTemplate__info}>
                      <p>
                        Дата:{" "}
                        <span className={style.consultTemplate__date}>
                          {formatDate(consult.startDate)}
                        </span>
                      </p>
                      <p>
                        Время:{" "}
                        <span className={style.consultTemplate__time}>
                          {getTimeFromDate(consult.startDate)}
                        </span>
                      </p>
                      <p>
                        Врач:{" "}
                        <span className={style.consultTemplate__doctor}>
                          {fullname}
                        </span>
                      </p>
                    </div>
                    <p className={style.consultTemplate__description}>
                      В назначенный день и время, будет активирована кнопка
                      «Подключиться» с помощью которой вы сможете присоединиться
                      к видео-консультации
                    </p>
                    <div className={style.buttons}>
                      <a href={consult.linkUser} target='_blank' rel="noreferrer"><BlueButton
                        width="320px"
                        text="Подключиться к видео"
                        handleClick={() => navigate(consult.linkUser)}
                      /></a>
                      <div className={style.buttons__contentBtns}>
                        <Button
                          variant="outlined"
                          style={buttonStyleBlue}
                          onClick={() => {
                            setIsOpenRescheduleConsult({
                              isOpen: true,
                              id: consult.id,
                            });
                          }}
                          sx={{ marginTop: { xs: "10px" } }}
                        >
                          Перенести
                        </Button>
                        <Button
                          variant="outlined"
                          style={buttonStyleRed}
                          onClick={() => {
                            setIsFirstRemoveConsult({ isOpen: true, id: consult.id });
                          }}
                        >
                          Отменить
                        </Button>
                      </div>
                    </div>
                  </li>
                </div>
    );
};

export default ConsultItem;

const stylesSX = {
    buttonDisabled: {
      width: { xs: "160px", md: "100%" },
      textTransform: "none",
    },
    buttonChange: {
      width: { xs: "0px", md: "160px" },
      border: "1px solid #2C60E3",
      color: "#2C60E3",
      textTransform: "none",
      fontWeight: "700",
      marginTop: { xs: "100px", md: "0px" },
    },
    buttonCancel: {
      width: { xs: "313px", md: "160px" },
      border: "1px solid #FF0000",
      color: "#FF0000",
      textTransform: "none",
      fontWeight: "700",
      marginTop: { xs: "10px", md: "0px" },
    },
    noBorder: {
      outline: "none",
      border: "none",
      color: "#fff",
    },
  };