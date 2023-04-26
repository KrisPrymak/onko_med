import { formatDate } from '../../../../../hooks/formatDate'
import s from './NotificationItem.module.css'
export const NotificationItem = ({notification})=> {
    return (
        <div className={s.notificationItem}>
            <p className={s.notification}>{notification.text}</p>
            <p className={s.time}>{formatDate(notification.date)}</p>
        </div>
    )
}