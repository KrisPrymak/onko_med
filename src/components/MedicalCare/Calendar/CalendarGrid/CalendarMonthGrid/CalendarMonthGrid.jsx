import 'moment/locale/ru'
import CalendarDay from '../CalendarDay/CalendarDay'
import s from './CalendarMonthGrid.module.css'
import moment from 'moment'
import CalendarDayNamesList from '../CalendarDayNamesList/CalendarDayNamesList'

const CalendarMonthGrid = props => {
	const day = props.startMonthDay.clone().subtract(1, 'day')
	const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

	const isCurrentDay = dayNumber => moment().isSame(dayNumber, 'day')
	const isCurrentMonth = dayNumber => moment().isSame(dayNumber, 'month')

	return (
		<div>
			<CalendarDayNamesList />
			<div className={s.calendarTemplate}>
				{daysArray.map(dayNumber => (
					<CalendarDay
						isCurrentDay={isCurrentDay(dayNumber)}
						isCurrentMonth={isCurrentMonth(dayNumber)}
						key={dayNumber.format('DDMMYYYY')}
						dayNumber={dayNumber.format('D')}
					/>
				))}
			</div>
		</div>
	)
}

export default CalendarMonthGrid
