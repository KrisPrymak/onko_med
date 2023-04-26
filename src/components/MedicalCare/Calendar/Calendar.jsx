import { Button } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'
import s from './Calendar.module.css'
import CalendarWeekGrid from './CalendarGrid/CalendarWeekGrid/CalendarWeekGrid.jsx'
import CalendarTitle from './CalendarTitle/CalendarTitle'
import CalendarToggle from './CalendarToggle/CalendarToggle'
import CalendarMonthGrid from './CalendarGrid/CalendarMonthGrid/CalendarMonthGrid'
import CalendarMobile from './CalendarMobile/CalendarMobile'

moment.lang('en', { week: { dow: 1 } })
window.moment = moment()

const Calendar = () => {
	moment.locale('ru')
	const currentMonth = moment().format('MMMM')
	console.log(currentMonth)

	const [today, setToday] = useState(moment())
	const [isPeriodWeek, setIsPeriodWeek] = useState(false)
	const [month, setMonth] = useState(currentMonth)
	const firstWeek = today.clone().startOf('month').get('week')
	const lastWeek = today.clone().get('week')

	const startMonthDay = today.clone().startOf('month').startOf('week')
	const startWeekDay = today.clone().startOf('week')
	const [weekNumber, setWeekNumber] = useState(lastWeek - firstWeek + 1)

	

	const [period, setPeriod] = useState('month')
	const handlePeriod = event => {
		setPeriod(event.target.value)
	}

	const nextMonthHandler = () => {
		setToday(prev => prev.clone().add(1, 'month'))
		setMonth(today.format('MMMM'))
	}

	const prevMonthHandler = () => {
		setToday(prev => prev.clone().subtract(1, 'month'))
	}

	const nextWeekHandler = () => {
		setToday(prev => prev.clone().add(1, 'week'))
		setWeekNumber(prev => prev + 1)
	}

	const prevWeekHandler = () => {
		setToday(prev => prev.clone().subtract(1, 'week'))
		setWeekNumber(prev => prev - 1)
	}

	return (
		<div className={s.calendarWrapper}>
			<CalendarTitle />
			<CalendarToggle
				currentMonth={currentMonth}
				weekNumber={weekNumber}
				nextMonthHandler={nextMonthHandler}
				prevMonthHandler={prevMonthHandler}
				nextWeekHandler={nextWeekHandler}
				prevWeekHandler={prevWeekHandler}
				handlePeriod={handlePeriod}
				period={period}
				// monthWeeksNumber={monthWeeksNumber}
			/>
			{window.innerWidth < 761 ? (
				<CalendarMobile startMonthDay={startMonthDay} />
			) : (
				<>
					{period === 'month' ? (
						<CalendarMonthGrid startMonthDay={startMonthDay} />
					) : (
						<CalendarWeekGrid startWeekDay={startWeekDay} />
					)}

					<Button
						style={{ minWidth: '350px', minHeight: '48px', position: 'absolute', right: '0px' }}
						variant='outlined'
					>
						Выгрузить перечень услуг
					</Button>
				</>
			)}
		</div>
	)
}

export default Calendar
