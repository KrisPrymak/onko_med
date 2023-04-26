import React from 'react'
import MyAccMobile from '../../AdminPanel/AdminInterface/MyAccMobile/MyAccMobile'
import { Menu } from '../Menu/Menu'
import HeaderMobile from '../../Registration/HeaderMobile/HeaderMobile'
import style from './UserPanel.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import MedicalCare from '../../MedicalCare/MedicalCare'
import { ServiceResult } from '../../ServiceResult/ServiceResult'
import TelemedConsult from '../../TelemedConsult/TelemedConsult'
import PaymentPage from '../../PaymentPage/PaymentPage'
import { Notifications } from '../../Notifications/Notifications'
import News from '../../News/News'
import Calendar from '../../MedicalCare/Calendar/Calendar'
import UserAccountSettings from '../../AdminPanel/AdminInterface/UserAccountSettings/UserAccountSettings'
import { useSelector } from 'react-redux'
import Account from '../../Account/Account'

const UserPanel = () => {
	const demo = useSelector(state => state.user.demo)
	const userName = useSelector(state => state.user.name)
	return (
		<div className={style.main}>
			<div className={style.container}>
				<HeaderMobile />
				<Menu userName={'Александра Дмитриевна'} menuData={menuData} />

				<div className={style.content}>
					<MyAccMobile />
					{demo && userName ? (
						<Routes>
							<Route path='*' element={<Navigate to={'/user/medicalCare'} />} />
							<Route path='/medicalCare' element={<MedicalCare />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/settings' element={<Account />} />
						</Routes>
					) : (
						<Routes>
							<Route path='*' element={<Navigate to={'/user/news'} />} />
							<Route path='/news' element={<News />} />
							<Route path='/medicalCare' element={<MedicalCare />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/results' element={<ServiceResult />} />
							<Route path='/paidPage' element={<PaymentPage />} />
							<Route path='/telemedConsult' element={<TelemedConsult />} />
							<Route path='/notifications' element={<Notifications />} />
							<Route path='/settings' element={<Account />} />
						</Routes>
					)}
				</div>
			</div>
		</div>
	)
}

export default UserPanel

const menuData = [
	{ id: 1055, text: 'Новости', icon: 'la:bullhorn', path: '/user/news', noDemo: false },
	{ id: 1004, text: 'Медицинские услуги', icon: 'cil:medical-cross', path: '/user/medicalCare', noDemo: true },
	{ id: 1005, text: 'Календарь услуг', icon: 'ph:calendar-blank', path: '/user/calendar', noDemo: true },
	{ id: 1006, text: 'Результаты услуг', icon: 'carbon:result', path: '/user/results', noDemo: false },
	{ id: 1007, text: 'Оплата услуг', icon: 'uiw:pay', path: '/user/paidPage', noDemo: false },
	{
		id: 1008,
		text: 'Телемедицинские консультации',
		icon: 'clarity:talk-bubbles-line',
		path: '/user/telemedConsult',
		noDemo: false,
	},
	{ id: 1009, text: 'Уведомления', icon: 'ph:bell', path: '/user/notifications', noDemo: false },
	{ id: 1010, text: 'Учетная запись', icon: 'carbon:settings', path: '/user/settings', noDemo: true },
]
