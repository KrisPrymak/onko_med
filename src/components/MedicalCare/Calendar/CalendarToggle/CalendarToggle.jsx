import React from 'react'
import CalendarMonthToggle from './CalendarMonthToggle'
import CalendarPeriod from './CalendarPeriod'
import s from './CalendarToggle.module.css'
import CalendarWeekToggle from './CalendarWeekToggle'

const CalendarToggle = props => {
	return (
		<div className={s.monitor}>
		<div className={s.periodSelect}>
			<CalendarPeriod handlePeriod={props.handlePeriod} period={props.period} />
		</div>
			<div className={s.toggles}>
				{props.period === 'month' ? (
					<CalendarMonthToggle monthProps={props} />
				) : (
					<div>
						<CalendarWeekToggle weekProps={props} />
						<CalendarMonthToggle monthProps={props} />
					</div>
				)}
			</div>
		</div>
	)
}

export default CalendarToggle
