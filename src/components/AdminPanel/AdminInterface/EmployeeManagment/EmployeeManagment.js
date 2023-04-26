import React, { useEffect, useState } from "react";
import style from "./EmployeeManagment.module.css";
import { TabTitle } from "./../../../common/TabTitle/TabTitle";
import { SearchInput } from "../../../common/SearchInput/SearchInput";
import BlueButton from "./../../../common/BlueButton/BlueButton";
import EmployeeItem from "./EmployeeItem/EmployeeItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../../store/employeeSlice";
import { useNavigate } from "react-router-dom";
import Preloader from "../../../common/Preloader/Preloader";

const EmployeeManagment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
  const employeeData = useSelector(state => state.employee.employeeList)
  useEffect(() => {
    dispatch(fetchEmployees(token))
  }, [dispatch])
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const status = useSelector(state => state.employee.status)
  return (
    <div className={style.container}>
      <TabTitle title="Управление сотрудниками" />
      {status === 'pending' ? <Preloader /> :  
      <>
      <SearchInput
        placeholder="Поиск сотрудника..."
        onClick={() => setIsActiveSearch(true)}
      />
      <div className={style.button}>
        <BlueButton width="350px" text="Добавить нового сотрудника" handleClick={() => navigate('/admin/createEmployee')}/>
      </div>
      {isActiveSearch &&
        employeeData.map((item) => {
          return (
            <EmployeeItem
              key={item.id}
              item={item}
            />
          );
        })
      }
      </>}
    </div>
  );
};

export default EmployeeManagment;
