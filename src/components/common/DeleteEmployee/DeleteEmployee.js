import React from 'react';
import style from './DeleteEmployee.module.css';
import questionRound from "./../../../media/questionRound.svg";
import BlueButton from '../BlueButton/BlueButton';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../../../store/employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteEmployee = ({setModalDelete, employeeItem}) => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  const handleDelete = () => {
    dispatch(deleteEmployee([+params.id, token]))
    navigate('/admin/employeeManagment')
  }
    return (
        <div className={style.popupBg}>
        <div className={style.popup}>
          <div className={style.popup__content}>
          <div>
            <img src={questionRound} alt="questionRound" />
          <h1 className={style.title}>Удалить сотрудника</h1>
          <p className={style.popup__description}>
          Вы уверены, что хотите удалить сотрудника {employeeItem.lastName} {employeeItem.firstName} {employeeItem.fatherName}?
          </p>
          <div className={style.popup__buttons}>
            <BlueButton
              text="Не удалять"
              width="100%"
              handleClick={() => {setModalDelete(false)}}
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

export default DeleteEmployee;