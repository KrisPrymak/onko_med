import { TabTitle } from '../../../common/TabTitle/TabTitle'
import s from './ServiceManagement.module.css'
import { SearchInput } from '../../../common/SearchInput/SearchInput'
import { FormControl, InputLabel, Select } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ServiceItem from './ServiceList/ServiceItem'
import { NavLink } from 'react-router-dom'

const ServiceManagement = props => {
	return (
		<div>
			<TabTitle title='Просмотр услуг' />
			<form style={{marginBottom: '15px'}} className={s.searchForm}>
				<SearchInput placeholder={'Поиск пользователя по имени, номеру телефона...'} />
				<div className={s.searchForm__controls}>
					<FormControl sx={{ width: { xs: '350px', md: '350px' }, height: '44px' }}>
						<InputLabel id='doctor-label'>Врач</InputLabel>
						<Select IconComponent={ExpandMoreIcon} labelId='doctor-label' id='doctor' label='doctor'></Select>
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
							label='departamentС'
						></Select>
					</FormControl>
				</div>
			</form>
			<NavLink  to={'/admin/adminInterFace/serviceManagement/serviceInfo'}>
				<ServiceItem />
			</NavLink>
		</div>
	)
}

export default ServiceManagement
