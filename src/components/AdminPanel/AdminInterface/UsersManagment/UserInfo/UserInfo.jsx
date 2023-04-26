import s from './UserInfo.module.css'
import {NavLink} from "react-router-dom";
export const UserInfo = ({user}) => {
    return(
        <NavLink  className={s.userInfo} to={`/admin/userSettings/${user.id}`}>
           {user.firstName ?  <p>{user.lastName} {user.firstName} {user.patronymic}</p> :
           <p>Noname user</p> }
            <p>{user.phoneNumber}</p>
        </NavLink>
    )
}