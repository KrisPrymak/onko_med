import s from './ServiceList.module.css'
import ServiceItem from './ServiceItem/ServiceItem'

const ServiceList = () => {
	return (
		<div className={s.serviceList}>
			<ul>
				<ServiceItem />
			</ul>
		</div>
	)
}

export default ServiceList
