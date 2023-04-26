import React from 'react'
import s from './CalendarDayName.module.css'

const CalendarDayName = (props) => {
	return (
		<div className={s.weekDay}>
			<div className={s.weekDayName}>{props.dayName}</div>
		</div>
	)
}

export default CalendarDayName;
