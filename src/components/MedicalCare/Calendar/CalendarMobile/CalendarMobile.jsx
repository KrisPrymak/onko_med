import moment from 'moment'
import CalendarDayNamesList from '../CalendarGrid/CalendarDayNamesList/CalendarDayNamesList'
import CalendarDayMobile from './CalendarDayMobile/CalendarDayMobile'
import s from './CalendarMobile.module.css'

const CalendarMobile = props => {
	const day = props.startMonthDay.clone().subtract(1, 'day')
	const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

	const isCurrentDay = dayNumber => moment().isSame(dayNumber, 'day')
	const isCurrentMonth = dayNumber => moment().isSame(dayNumber, 'month')

	return (
		<div className={s.calendarMobile}>
			<CalendarDayNamesList />
			<div className={s.calendarTemplate}>
				{daysArray.map(dayNumber => (
					<CalendarDayMobile
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

export default CalendarMobile
