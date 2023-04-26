import s from './Timetable.module.css'
import TimetableRow from './TimetableRow/TimetableRow'

const Timetable = props => {
	const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

	const week = [
		{
			name: 'Пн',
			hours: hours,
			workTime: hours.slice(1, 7),
		},
		{
			name: 'Вт',
			hours: hours,
			workTime: hours.slice(4, 8),
		},
		{
			name: 'Ср',
			hours: hours,
			workTime: hours.slice(8, 14),
		},
		{
			name: 'Чт',
			hours: hours,
			workTime: hours.slice(1, 8),
		},
		{
			name: 'Пт',
			hours: hours,
		},
	]

	return (
		<>
			<div className={s.rowWrapper}>
				<div className={s.day}></div>
				<div className={s.hoursRow}>
					{hours.map(hour => (
						<div className={s.hourCell}>{`${hour}.00`}</div>
					))}
				</div>
			</div>
			<div className={s.timetableWrapper}>
				<div className={s.dayNamesRow}>
					{week.map(day => (
						<div className={s.dayName}>{day.name}</div>
					))}
				</div>
				<div className={s.timetable}>
					{week.map(day => (
						<TimetableRow key={day.name} name={day.name} hours={day.hours} workTime={day.workTime} />
					))}
				</div>
			</div>
		</>
	)
}

export default Timetable
