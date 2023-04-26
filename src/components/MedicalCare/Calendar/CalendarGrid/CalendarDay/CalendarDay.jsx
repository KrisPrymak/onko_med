import React from 'react';
import ServiceList from '../ServiceList/ServiceList'
import s from './CalendarDay.module.css'

const CalendarDay = (props) => {
	return (
		<div className={`${props.isCurrentDay ? s.cellCurrent : s.cell}`}>
				<div className={`${props.isCurrentMonth ? s.dayNumber : s.dayNumberUnselected}`}>
					{props.dayNumber} 
				</div>
				<ServiceList />
		</div>
	)
}

export default CalendarDay;