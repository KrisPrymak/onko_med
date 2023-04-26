import { Icon } from "@iconify/react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import style from "./PopupRescheduleConsult.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BlueButton from "../../common/BlueButton/BlueButton";
import { useDispatch, useSelector } from "react-redux";
import { clearConsultItem, fetchConsultItem, updateConsultItem } from "../../../store/ConsultsSlice";
import { formatDate, getTimeFromDate } from "../../../hooks/formatDate";
import Preloader from "../../common/Preloader/Preloader";


const PopupRescheduleConsult = ({
  setIsOpenRescheduleConsult,
  rescheduleSuccess,
  isOpenRescheduleConsult
}) => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    dispatch(fetchConsultItem([isOpenRescheduleConsult.id, token]))
  }, [dispatch])

  const consultItem = useSelector(state => state.consults.consultItem)

  const closeCross = () => {
    // dispatch(clearConsultItem())
    setIsOpenRescheduleConsult({ isOpen: false, id: null })
  }


  const handleReshedule = () => {
    dispatch(updateConsultItem([isOpenRescheduleConsult.id, {
      employeeId: consultItem.employeeId,
      userId: consultItem.userId,
      startDate: consultItem.startDate,
      comment: 'newComment'
    }, token]))
    rescheduleSuccess({
      employee: consultItem.employeeId,
      userId: consultItem.userId,
      startDate: consultItem.startDate,
      comment: 'newComment'
    })
  }

  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <Icon
            icon="material-symbols:close"
            className={style.popup__cross}
            onClick={closeCross}
          />
          <div className={style.popup__info}>
            <h2 className={style.popup__title}>
              Перенос даты и времени консультации
            </h2>
           {!consultItem.startDate ? <Preloader /> :
            <>
            <div className={style.popup__name}>
            <span className={style.popup__name_left}>Наименование:</span>
            <span className={style.popup__name_right}>
              Консультация терапевта
            </span>
          </div>
          <div className={style.popup__oldDate}>
            <div className={style.popup__oldDate_title}>
              <span>Старая дата:</span>
              <span>Старое время:</span>
            </div>
            <div className={style.popup__oldDate_date}>
              <span>{formatDate(consultItem.startDate)}</span>
              <span>{getTimeFromDate(consultItem.startDate)}</span>
            </div>
          </div>
          <div className={style.popup__newDate}>
            <FormControl sx={{ width: "350px" }}>
              <span style={{ fontWeight: "900" }}>Новая дата</span>
              <Select
                onChange={(e) => setDate(e.target.value)}
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value={1}>Вчера</MenuItem>
                <MenuItem value={2}>Сегодня</MenuItem>
                <MenuItem value={3}>Завтра</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "47%" }}>
              <span style={{ fontWeight: "900" }}>Новое время</span>
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
          </div>
          <div className={style.popup__buttonSubmit}>
            <BlueButton
              text="Перенести запись"
              width="100%"
              handleClick={handleReshedule}
              disabled={!date || !time}
            />
          </div>
          </>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupRescheduleConsult;
