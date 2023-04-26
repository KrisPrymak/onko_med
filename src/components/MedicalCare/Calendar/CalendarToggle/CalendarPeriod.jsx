import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import s from './CalendarPeriod.module.css'

const CalendarPeriod = props => {
	return (
		<div>
			<FormControl sx={{ width: { xs: '160px', md: '160px' } }}>
				<span className={s.selectInputs__title}>Врач</span>
				<Select
					IconComponent={ExpandMoreIcon}
					sx={{ height: '45px' }}
					onChange={props.handlePeriod}
					value={props.period}
				>
					<MenuItem value='month'>Месяц</MenuItem>
					<MenuItem value='week'>Неделя</MenuItem>
				</Select>
			</FormControl>
			
		</div>
	)
}

export default CalendarPeriod
