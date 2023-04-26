import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBack from "../../../../common/ButtonBack/ButtonBack";
import { TabTitle } from "../../../../common/TabTitle/TabTitle";
import { Button } from "@mui/material";
import BlueButton from "../../../../common/BlueButton/BlueButton";
import style from "./EmployeeItemPage.module.css";
import { fetchEmployees, fetchPdfEmployee} from './../../../../../store/employeeSlice';
import DeleteEmployee from "../../../../common/DeleteEmployee/DeleteEmployee";
import Preloader from "../../../../common/Preloader/Preloader";

const EmployeeItemPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const status = useSelector(state => state.employee.status);

  const employeeData = useSelector(state => state.employee.employeeList);
  const employeeItem = employeeData.filter((i) => i.id === +params.id)[0];


  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees(token))
  }, [dispatch])

  const updateData = () => {
    navigate(`/admin/updateEmployee/${employeeItem.id}`)
  };

  const handleDownload = () => {
    dispatch(fetchPdfEmployee([{
      login: employeeItem.login,
  }, token]))
  }


  return (
    <div>
      <TabTitle title="Сотрудник" />
      {status === 'pending' ? <Preloader />
      : <>
      <ButtonBack
        handleClick={() => {
          navigate(-1);
        }}
      />
  {modalDelete && <DeleteEmployee setModalDelete={setModalDelete} employeeItem={employeeItem}/>}
     <div className={style.formData}>
     <div className={style.fullname}>
        <p>Фамилия</p>
        <p>{employeeItem.lastName}</p>
      </div>
      <div className={style.name}>
        <p>Имя</p>
        <p>{employeeItem.firstName}</p>
      </div>
      <div className={style.patronymic}>
        <p>Отчество</p>
        <p>{employeeItem.patronymic}</p>
      </div>
      <div className={style.login}>
        <p>Логин</p>
        <p>{employeeItem.login}</p>
      </div>
      <div className={style.role}>
        <p>Роль</p>
        <p>{employeeItem.role}</p>
      </div>
      <div className={style.department}>
        <p>Отделение</p>
        <p>{employeeItem.department?.name}</p>
      </div>
     </div>
      <div className={style.buttons}>
        <BlueButton
          text="Изменить данные"
          width="350px"
          handleClick={updateData}
        />
        <Button
          color="error"
          variant="outlined"
          onClick={() => {setModalDelete(true)}}
          sx={{ width: "350px", textTransform: "none", height: "48px", mb: '20px' }}
        >
          Удалить сотрудника
        </Button>
        <Button onClick={handleDownload} variant="outlined" sx={{width: '350px', textTransform: 'none', height: '48px', fontWeight: '700'}}>Сотрудник.pdf</Button>
      </div>
      </>}
    </div>
  );
};

export default EmployeeItemPage;
