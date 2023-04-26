import s from "./NotificationManagment.module.css";
import { TabTitle } from "../../../common/TabTitle/TabTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationItem } from "./NotificationItem/NotificationItem";
import { fetchNotifications } from "../../../../store/NotificationSlice";
import Preloader from "../../../common/Preloader/Preloader";

const NotificationManagment = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchNotifications(token));
  }, [dispatch]);
  const notifications = useSelector(
    (state) => state.notifications.notificationList
  );
  const status = useSelector((state) => state.notifications.status);
  return (
    <>
      <TabTitle title={"Управление уведомлениями"} />
      {status === "pending" ? (
        <Preloader />
      ) : (
        <>
          <div className={s.subtitle}>История уведомлений</div>
          {notifications.map((n) => (
            <NotificationItem key={n.id} notification={n} />
          ))}
        </>
      )}
    </>
  );
};

export default NotificationManagment;
