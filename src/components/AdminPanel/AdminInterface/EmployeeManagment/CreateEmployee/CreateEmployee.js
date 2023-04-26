import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../../../common/ButtonBack/ButtonBack";
import { TabTitle } from "../../../../common/TabTitle/TabTitle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BlueButton from "../../../../common/BlueButton/BlueButton";
import { useDispatch, useSelector } from "react-redux";
import { postEmployee } from "../../../../../store/employeeSlice";
import { generateLogin } from "../../../../../hooks/generateLogin";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [patronymicValue, setPatronymicValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState("");

  const clearAllField = () => {
    setLoginValue("");
    setSurnameValue("");
    setNameValue("");
    setPatronymicValue("");
    setRoleValue("");
  };

  const setLogin = () => {
    if (surnameValue && nameValue) {
      let login = generateLogin(nameValue, surnameValue);
      setLoginValue(login);
    }
  };
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const addEmployee = () => {
    dispatch(
      postEmployee([
        {
          firstName: nameValue,
          lastName: surnameValue,
          patronymic: patronymicValue,
          login: loginValue,
          role: roleValue,
          department: departmentValue,
        },
        token,
      ])
    );
    clearAllField();
  };

  const handleSelectDepartment = (e) => {
    setDepartmentValue({
      id: e.target.value,
      name: e.target.name
    })
  };


  return (
    <div>
      <TabTitle title="Добавление нового сотрудника" />
      <ButtonBack handleClick={() => navigate(-1)} />
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: "60px", mb: "30px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Логин</span>
          <TextField
            sx={{ width: "350px", mr: "30px", mb: "15px" }}
            value={loginValue}
            variant="outlined"
            placeholder="Логин"
            onChange={(e) => setLoginValue(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "900" }}>Фамилия</span>
          <TextField
            sx={{ width: "350px", mb: "15px" }}
            value={surnameValue}
            onBlur={setLogin}
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
            disabled={!surnameValue}
            onBlur={setLogin}
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
            disabled={!nameValue}
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
            disabled={!patronymicValue}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="USER">USER</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "350px" }}>
          <span style={{ fontWeight: "900" }}>Отделение</span>
          <Select
            onChange={handleSelectDepartment}
            IconComponent={ExpandMoreIcon}
            disabled={!roleValue}
          >
            <MenuItem value={1} name='Отделение противоопухолевой лекарственной терапии (химиотерапии) № 1'>химиотерапии № 1</MenuItem>
            <MenuItem value={2} name='Отделение противоопухолевой лекарственной терапии (химиотерапии) № 2'>химиотерапии № 2</MenuItem>
            <MenuItem value={3} name='Администрация' >Администрация</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <BlueButton
        disabled={!(surnameValue && nameValue && patronymicValue && roleValue)}
        text="Добавить"
        handleClick={addEmployee}
        width="350px"
      />
    </div>
  );
};

export default CreateEmployee;
