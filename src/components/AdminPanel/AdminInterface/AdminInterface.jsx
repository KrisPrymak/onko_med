import React from "react";
import s from './AdminInterface.module.css'
import {Menu} from "../../common/Menu/Menu";
import HeaderMobile from "../../Registration/HeaderMobile/HeaderMobile";
import MyAccMobile from './MyAccMobile/MyAccMobile';
import {Navigate, Route, Routes} from "react-router-dom";
import NewsManagment from './NewsManagment/NewsManagment';
import NotificationManagment from './NotificationManagment/NotificationManagment';
import ServiceManagement from './ServiceManagement/ServiceManagement';
import Schedule from './Schedule/Schedule';
import UsersManagment from './UsersManagment/UsersManagment'
import CreateNewsItem from "./NewsManagment/CreateNewsItem/CreateNewsItem";
import EmployeeManagment from "./EmployeeManagment/EmployeeManagment";
import EmployeeItemPage from "./EmployeeManagment/EmployeeItemPage/EmployeeItemPage";
import CreateEmployee from "./EmployeeManagment/CreateEmployee/CreateEmployee";
import UpdateEmployee from './EmployeeManagment/UpdateEmployee/UpdateEmployee';
import { UserSettings } from "./UserSettings/UserSettings";
import NewsItemPage from "../../News/NewsItemPage/NewsItemPage";

export const AdminInterface = () => {
    const menuData = [
        {id: 6000, text: 'Новости', icon: "la:bullhorn", path: '/admin/newsManagment', noDemo: true},
        {id: 67001, text: 'Сотрудники', icon: "cil:medical-cross", path: '/admin/employeeManagment', noDemo: true},
        {id: 17801, text: 'Расписание сотрудников', icon: "ph:calendar-blank", path: '/admin/schedule', noDemo: true},
        {id: 10981, text: 'Услуги', icon: "carbon:result", path: '/admin/serviceManagment', noDemo: true},
        {id: 105431, text: 'Уведомления', icon: "ph:bell", path: '/admin/notificationManagment', noDemo: true},
        {id: 100435, text: 'Управление пользователями', icon: 'mdi:account-group-outline', path: '/admin/usersManagment', noDemo: true},
        {id: 1004325, text: 'Управление шаблонами', icon: 'ic:outline-color-lens', path: '/admin/templatesManagement', noDemo: true},
    ]

    return (
        <div className={s.adminPanelWrapper}>
            <HeaderMobile/>
            <MyAccMobile/>
            <div className={s.adminInterfaceWrapper}>
                <Menu userName={'Администратор'} menuData={menuData}/>
                <div className={s.userSettingsWrapper}>
                    <Routes>
                        <Route path={'*'} element={<Navigate to={'/admin/newsManagment'} />} />
                        <Route path={'/newsManagment'} element={<NewsManagment/>} />
                        <Route path={'/employeeManagment'} element={<EmployeeManagment />} />
                        <Route path={'/schedule'} element={<Schedule />} />
                        <Route path={'/serviceManagment'} element={<ServiceManagement/>} />
                        <Route path={'/notificationManagment'} element={<NotificationManagment />} />
                        <Route path={'/usersManagment'} element={<UsersManagment />} />
                        <Route path={'/templatesManagement'} element={<div>Управление Шаблонами</div>} />

                        <Route path={'/createNewsItem'} element={<CreateNewsItem />} />
                        <Route path={'/employeeItemPage/:id'} element={<EmployeeItemPage />} />
                        <Route path={'/updateEmployee/:id'} element={<UpdateEmployee />} />
                        <Route path={'/createEmployee'} element={<CreateEmployee />} />
                        <Route path={'/userSettings/:id'} element={<UserSettings />} />
                        <Route path={'/newsItemPage/:id'} element={<NewsItemPage />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}
