import s from './NotificationItem.module.css'
export const NotificationItem = ({notification, time})=> {
    return (
        <div className={s.notificationItem}>
            <p className={s.notification}>{notification}</p>
            <p className={s.time}>{time}</p>
        </div>
    )
}