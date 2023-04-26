import CalendarWeekDay from '../CalendarDay/CalendarWeekDay'
import CalendarDayNamesList from '../CalendarDayNamesList/CalendarDayNamesList'
import s from './CalendarWeekGrid.module.css'
import moment from 'moment'
import { Button } from '@mui/material'

const CalendarWeekGrid = props => {
	const weekDay = props.startWeekDay.clone().subtract(1, 'day')
	const weekDaysArray = [...Array(7)].map(() => weekDay.add(1, 'day').clone())

	const isCurrentDay = dayNumber => moment().isSame(dayNumber, 'day')

	const isCurrentMonth = dayNumber => moment().isSame(dayNumber, 'month')
	

	return (
		<div>
			<CalendarDayNamesList />
			<div className={s.weekGrid}>
				{weekDaysArray.map(weekDayNumber => (
					<CalendarWeekDay
						key={weekDayNumber.format('DDMMYYYY')}
						weekDayNumber={weekDayNumber.format('D')}
						isCurrentDay={isCurrentDay(weekDayNumber)}
						isCurrentMonth={isCurrentMonth(weekDayNumber)}
					/>
				))}
			</div>
		</div>
	)
}

export default CalendarWeekGrid
