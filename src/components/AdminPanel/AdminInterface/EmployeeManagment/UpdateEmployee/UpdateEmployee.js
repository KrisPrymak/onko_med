import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDepartments, fetchEmployees } from "../../../../../store/employeeSlice";
import ButtonBack from "../../../../common/ButtonBack/ButtonBack";
import { TabTitle } from "../../../../common/TabTitle/TabTitle";
import style from "./UpdateEmployee.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import BlueButton from "../../../../common/BlueButton/BlueButton";
import roundDone from "./../../../../../media/roundDone.svg";
import DeleteEmployee from "../../../../common/DeleteEmployee/DeleteEmployee";
import {putEmployee} from './../../../../../store/employeeSlice'

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)

  const employeeData = useSelector((state) => state.employee.employeeList);
  const departmentsData = useSelector(state => state.employee.departmentsList)
  useEffect(() => {
    dispatch(fetchEmployees(token));
    dispatch(fetchDepartments(token));
    //Кристина, тут не подгружатся департаменты
  }, [dispatch]);

  const employeeItem = employeeData.filter((i) => i.id === +params.id)[0];
const [departmentsList, setDepartmentsList] = useState(departmentsData || [])
  const [loginValue, setLoginValue] = useState(employeeItem.login);
  const [surnameValue, setSurnameValue] = useState(employeeItem.lastName);
  const [nameValue, setNameValue] = useState(employeeItem.firstName);
  const [patronymicValue, setPatronymicValue] = useState(
    employeeItem.patronymic
  );
  const [roleValue, setRoleValue] = useState(employeeItem.role);
  const [departmentValue, setDepartmentValue] = useState(employeeItem.department);
  const [modalUpdate, setModalUpdate] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const updateEmployee = () => {
    dispatch(putEmployee([employeeItem.id, {
      login: loginValue,
      lastName: surnameValue,
      firstName: nameValue,
      patronymic: patronymicValue,
      role: roleValue
    }, token]))
    setModalUpdate(true)
  };
  const deleteEmployee = () => {
    setModalDelete(true)
  }

  const handleSelectDepartment = (e) => {
    setDepartmentValue({
      id: e.target.value,
      name: e.target.name
    })
  }

  return (
    <div>
      {modalUpdate && <div className={style.popupBg}>
        <div className={style.popup}>
          <div className={style.popup__content}>
          <div>
            <img src={roundDone} alt="roundDone" />
          <h1 className={style.title}>Данные успешно обновлены</h1>
          <BlueButton text='Перейти к сотруднику' width='255px' handleClick={() => {navigate(`/admin/employeeItemPage/${employeeItem.id}`)}}/>
          </div>
          </div>
        </div>
      </div>}

      {modalDelete && <DeleteEmployee setModalDelete={setModalDelete} employeeItem={employeeItem}/>}

      <TabTitle title="Сотрудник" />
      <ButtonBack
        handleClick={() => {
          navigate(-1);
        }}
      />
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: "60px", mb: "30px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Логин</span>
          <TextField
            sx={{ width: "350px", mr: "30px", mb: "15px" }}
            value={loginValue}
            variant="outlined"
            placeholder="Логин"
            onChange={(e) => {
              setLoginValue(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Фамилия</span>
          <TextField
            sx={{ width: "350px", mb: "15px" }}
            value={surnameValue}
            onChange={(e) => {
              setSurnameValue(e.target.value);
            }}
            variant="outlined"
            placeholder="Введите фамилию"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Имя</span>
          <TextField
            sx={{ width: "350px", mr: "30px", mb: "15px" }}
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
            variant="outlined"
            placeholder="Введите имя"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Отчество</span>
          <TextField
            sx={{ width: "350px" }}
            variant="outlined"
            placeholder="Введите отчество"
            value={patronymicValue}
            onChange={(e) => {
              setPatronymicValue(e.target.value);
            }}
          />
        </div>
        <FormControl sx={{ width: "350px", mr: "30px", mb: "15px" }}>
          <span style={{ fontWeight: "900" }}>Роль</span>
          <Select
            onChange={(event) => {
              setRoleValue(event.target.value);
            }}
            value={roleValue}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="USER">USER</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "350px" }}>
          <span style={{ fontWeight: "900" }}>Отделение</span>
          <Select
            IconComponent={ExpandMoreIcon}
            disabled={!roleValue}
            defaultValue={departmentValue.id}
            onChange={handleSelectDepartment}
          >
            <MenuItem value={1} name='Отделение противоопухолевой лекарственной терапии (химиотерапии) № 1'>химиотерапии № 1</MenuItem>
            <MenuItem value={2} name='Отделение противоопухолевой лекарственной терапии (химиотерапии) № 2'>химиотерапии № 2</MenuItem>
            <MenuItem value={3} name='Администрация' >Администрация</MenuItem>
            {/* {departmentsList.map(depart => {
              return (
                <MenuItem key={depart.id} value={depart.id}>{depart.name}</MenuItem>
              )
            })} */}
          </Select>
        </FormControl>
        
      </Box>
      <div className={style.buttons}>
        <BlueButton
          width="350px"
          text="Сохранить изменения"
          handleClick={updateEmployee}
        />
        <Button variant="outlined" color="error" sx={{ width: "350px", textTransform: 'none', fontWeight: '700' }} onClick={deleteEmployee}>
          Удалить сотрудника
        </Button>
      </div>
    </div>
  );
};

export default UpdateEmployee;
