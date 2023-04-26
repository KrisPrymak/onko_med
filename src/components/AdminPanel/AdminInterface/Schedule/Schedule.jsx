import { TabTitle } from '../../../common/TabTitle/TabTitle'
import { SearchInput } from '../../../common/SearchInput/SearchInput'
import { FormControl, InputLabel, Select } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavLink } from 'react-router-dom'
import s from './Schedule.module.css'
import Employee from './Employee/Employee'

const Schedule = props => {
	return (
		<>
			<TabTitle title="Просмотр расписания"/>
			<form style={{marginBottom: '15px'}} className={s.searchForm}>
				<SearchInput placeholder={'Поиск сотрудника по имени...'} />
				<div className={s.searchForm__controls}>
					<FormControl sx={{ width: { xs: '350px', md: '350px' }, height: '44px' }}>
						<InputLabel id='specialization-label'>Специализация</InputLabel>
						<Select IconComponent={ExpandMoreIcon} labelId='specialization-label' id='specialization' label='specialization'></Select>
					</FormControl>

					<FormControl
						sx={{
							width: { xs: '350px', md: '350px' },
							height: '44px',
							mt: { xs: '10px', md: '0' },
							mb: { xs: '10px' },
						}}
					>
						<InputLabel id='demo-simple-select-label'>Отделение</InputLabel>
						<Select
							IconComponent={ExpandMoreIcon}
							labelId='departament-label'
							id='departament'
							label='departament'
						></Select>
					</FormControl>
				</div>
			</form>
			<NavLink  to={'/admin/adminInterFace/schedule/employee'}>
				<Employee />
			</NavLink>
		</>
	)
}

export default Schedule