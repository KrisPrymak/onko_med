import s from './CalendarPeriodToggle.module.css'

const CalendarWeekToggle = props => {
	const { weekNumber, nextWeekHandler, prevWeekHandler } = props.weekProps

	return (
		<div className={s.BtnGroupWeek}>
			<button style={{width: '11px'}} onClick={prevWeekHandler}>
				<svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M9.76718 1.5887L1.47169 9.9557L9.83869 18.2506C10.0706 18.4802 10.0718 18.8546 9.84224 19.0862C9.61264 19.3179 9.23826 19.3194 9.0069 19.0898L0.305402 10.4633C0.196663 10.3555 0.139044 10.2166 0.131361 10.0757C0.128997 10.0346 0.131655 9.99352 0.137565 9.95304C0.135201 9.93708 0.131361 9.92172 0.131065 9.90576C0.122497 9.74502 0.178933 9.58102 0.301265 9.4581L8.9283 0.756901C9.15789 0.524944 9.53198 0.523466 9.76393 0.753355C9.99589 0.983244 9.99707 1.35733 9.76718 1.5887Z'
						fill='#2C60E3'
					/>
				</svg>
			</button>
			<span className={s.selectedWeek}>{weekNumber} неделя</span>

			<button style={{width: '11px'}} onClick={nextWeekHandler}>
				<svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1.23282 1.5887L9.52831 9.9557L1.16131 18.2506C0.929352 18.4802 0.92817 18.8546 1.15776 19.0862C1.38736 19.3179 1.76174 19.3194 1.9931 19.0898L10.6946 10.4633C10.8033 10.3555 10.861 10.2166 10.8686 10.0757C10.871 10.0346 10.8683 9.99352 10.8624 9.95304C10.8648 9.93708 10.8686 9.92172 10.8689 9.90576C10.8775 9.74502 10.8211 9.58102 10.6987 9.4581L2.0717 0.756901C1.84211 0.524944 1.46802 0.523466 1.23607 0.753355C1.00411 0.983244 1.00293 1.35733 1.23282 1.5887Z'
						fill='#2C60E3'
					/>
				</svg>
			</button>
		</div>
	)
}

export default CalendarWeekToggle
