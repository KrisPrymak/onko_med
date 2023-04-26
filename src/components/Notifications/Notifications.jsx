import React from "react";
import NotificationList from "../AdminPanel/AdminInterface/NotificationManagment/NotificationList/NotificationList";
import { TabTitle } from "../common/TabTitle/TabTitle";

export const Notifications = () => {

    return (
        <>
            <TabTitle title={'Уведомления'}/>
             <NotificationList />
        </>

    )
}