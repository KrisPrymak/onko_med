import ButtonBack from '../../../../common/ButtonBack/ButtonBack'
import { TabTitle } from '../../../../common/TabTitle/TabTitle'
import s from './EmployeeSchedule.module.css'
import Timetable from './Timetable/Timetable'
import { NavLink } from 'react-router-dom'

const EmployeeSchedule = props => {
	return (
		<>
			<TabTitle title='Просмотр расписания' />
			<NavLink to={'/admin/adminInterFace/schedule/'}>
				<ButtonBack />
			</NavLink>
			<div className={s.info}>
				<ul>
					<li>
						<div className={s.infoName}>ФИО:</div>
						<div className={s.infoValue}>Иванова Василиса Григорьевна</div>
					</li>
					<li>
						<div className={s.infoName}>Специальность:</div>
						<div className={s.infoValue}>Врач-онколог</div>
					</li>
				</ul>
			</div>
			<Timetable />
		</>
	)
}

export default EmployeeSchedule
