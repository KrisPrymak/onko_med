import CalendarDayName from './CalendarDayName';
import s from './CalendarDayNamesList.module.css'

const CalendarDayNamesList = () => {
	const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

	return (
		<div className={s.weekDayGrid}>
			{dayNames.map(dayName => (
				<CalendarDayName dayName={dayName} key={dayName} />
			))}
		</div>
	)
}

export default CalendarDayNamesList;