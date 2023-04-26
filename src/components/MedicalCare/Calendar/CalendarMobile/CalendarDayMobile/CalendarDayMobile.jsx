import ServiceListMobile from '../ServiceListMobile/ServiceListMobile'
import s from './CalendarDayMobile.module.css'

const CalendarDayMobile = props => {
	return (
		<div className={`${props.isCurrentMonth ? s.cell : s.cellCurrent}`}>
			<div className={`${props.isCurrentDay ? s.dayNumberCurrent : s.dayNumber}`}>{props.dayNumber}</div>
			<ServiceListMobile />
		</div>
	)
}

export default CalendarDayMobile
