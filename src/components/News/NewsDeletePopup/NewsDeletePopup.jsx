import React from 'react';
import style from './NewsDeletePopup.module.css';
import questionRound from "./../../../media/questionRound.svg";
import BlueButton from '../../common/BlueButton/BlueButton';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearNews, deleteNewsItem } from '../../../store/NewsSlice';

const NewsDeletePopup = ({setModalDelete, idDeleteNews}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)

  const handleNoDelete = () => {
    setModalDelete(false)
  }

  const handleDelete = () => {
    dispatch(deleteNewsItem([idDeleteNews, token]))
    dispatch(clearNews())
    navigate('/admin/newsManagment')
    setModalDelete(false)
  }
    return (
        <div className={style.popupBg}>
        <div className={style.popup}>
          <div className={style.popup__content}>
          <div>
            <img src={questionRound} alt="questionRound" />
          <h1 className={style.title}>Удалить новость</h1>
          <p className={style.popup__description}>
          Вы уверены, что хотите удалить новость?
          </p>
          <div className={style.popup__buttons}>
            <BlueButton
              text="Не удалять"
              width="100%"
              handleClick={handleNoDelete}
            />
            <Button
              style={{
                width: "100%",
                border: "1px solid #FF0000",
                color: "#FF0000",
                textTransform: "none",
                fontWeight: "700",
              }}
              variant="outlined"
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default NewsDeletePopup;