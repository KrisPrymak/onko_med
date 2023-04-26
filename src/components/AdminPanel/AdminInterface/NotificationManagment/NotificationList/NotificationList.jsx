import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { fetchUserNotifications } from "../../../../../store/NotificationSlice";
import Preloader from "../../../../common/Preloader/Preloader";

const NotificationList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.id);
  const status = useSelector((state) => state.notifications.status);

  useEffect(() => {
    dispatch(fetchUserNotifications([userId, token]));
  }, [dispatch]);

  const notifications = useSelector(
    (state) => state.notifications.userNotifications
  );
  return (
    <div>
      {status === "pending" ? (
        <Preloader />
      ) : (
        notifications.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))
      )}
    </div>
  );
};

export default NotificationList;
