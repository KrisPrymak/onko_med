import s from '../ServiceList.module.css'
import { NavLink } from 'react-router-dom'

const ServiceItem = () => {
	return (
		<div>
			<NavLink to={'/service'}><li className={`${s.serviceName} ${s.appointment}`}>Прием у врача онколога</li></NavLink>
			<li className={`${s.serviceName} ${s.research}`}>
				Исследование уровня антигена аденогенных раков CA 72-4 в крови
			</li>
		</div>
	)
}

export default ServiceItem
