import s from './ServiceInfoItem.module.css'

const ServiceInfoItem = props => {
	return (
		<div className={s.infoItem}>
			<div className={s.valueName}>{props.name}</div>
			<div className={s.value}>{props.qr ? <img className={s.qrCode} src={props.qr} /> : props.value}</div>
		</div>
	)
}

export default ServiceInfoItem
