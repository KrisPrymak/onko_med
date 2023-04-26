import ButtonBack  from '../../../../common/ButtonBack/ButtonBack'
import {TabTitle} from '../../../../common/TabTitle/TabTitle'

import s from './ServicePage.module.css'
import { NavLink } from 'react-router-dom'

const ServicePage = props => {
	return (
		<div>
			<TabTitle title='Просмотр услуг' />
			<NavLink to={'/admin/adminInterFace/serviceManagement'}>
				<ButtonBack />
			</NavLink>
			<div className={s.info}>
				<ul>
					<li className={s.listItem}>
						<div className={s.infoName}>Название услуги:</div>
						<div className={s.infoValue}>
							Планирование и моделирование лучевой терапии с использованием виртуальной трехмерной модели тела
						</div>
					</li>
					<li className={s.listItem}>
						<div className={s.infoName}>Стоимость услуги:</div>
						<div className={s.infoValue}>6640 рублей</div>
					</li>
					<li className={s.listItem}>
						<div className={s.infoName}>Место оказания:</div>
						<div className={s.infoValue}>1 корпус, 2 этаж, 205 кабинет</div>
					</li>
					<li className={s.listItem}>
						<div className={s.infoName}>Подготовка к приёму:</div>
						<div className={s.infoValue}>Нет специальных требований</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ServicePage
