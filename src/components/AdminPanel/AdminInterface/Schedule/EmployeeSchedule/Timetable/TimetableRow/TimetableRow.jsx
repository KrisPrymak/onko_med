import BlueButton from '../../../../../../common/BlueButton/BlueButton'
import Timetable from '../Timetable'
import s from './TimetableRow.module.css'

const TimetableRow = ({ name, hours, workTime }) => {
	TimetableRow.defaultProps = {
		workTime: []
	}
	

	
	const lastHour = (workTime.length - 1)
	const width = (workTime[lastHour] - workTime[0])*7.14
	// console.log(workTime)

	const onClickHandler = e => {
		// console.log(e.target.id)
	}

	return (
		<>
			<div key={name} workTime={workTime} className={s.row}>
				{hours.map(hour => (
					<div key={hour} time={hour} className={s.cell}>
						{workTime[0] === hour && (
							<div
								id={name}
								onClick={onClickHandler}
								className={s.cellSelected}
								style={{
									width: `${width}%`,
								}}
							>
								{`${workTime[0]}.00 - ${workTime[lastHour]}.00`}
							</div>
						)}
					</div>
				))}
			</div>
		</>
	)
}

export default TimetableRow
