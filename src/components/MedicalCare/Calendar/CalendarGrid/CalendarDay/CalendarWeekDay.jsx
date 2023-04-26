import s from './CalendarWeekDay.module.css'

const CalendarWeekDay = (props) => {
	return (
		<div className={`${props.isCurrentDay ? s.cellCurrent : s.cell}`}>
				<div className={`${props.isCurrentMonth ? s.dayNumber : s.dayNumberUnselected}`}>
					{props.weekDayNumber} 
				</div>
		</div>
	)
}

export default CalendarWeekDay;