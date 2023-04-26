import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../../media/logo.svg'
import HeaderMobile from '../../../Registration/HeaderMobile/HeaderMobile'
import s from './UserInformation.module.css'
import { UserInformationInput } from './UserInformationInput'
import { cyrrilicLatterRegex, phoneRegex } from './constants'

import { fetchUser, putUser } from '../../../../store/UserSlice'
import Preloader from '../../../common/Preloader/Preloader'

export const UserInformation = () => {
	const token = useSelector(state => state.auth.token)
	const userId = useSelector(state => state.auth.id)
	const putStatus = useSelector(state => state.user.putStatus)
	const fetchStatus = useSelector(state => state.user.status)
	const userName = useSelector(state => state.user.firstName)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmit = ({ firstName, lastName, patronymic, phoneNumber, birthday, city, street, flatNumber }) => {
		birthday = new Date(birthday)
		const formatedBirthday = birthday.toISOString()
		const address = `${city} ${street} ${flatNumber}`
		console.log(address)
		dispatch(
			putUser({
				userId,
				firstName,
				lastName,
				patronymic,
				phoneNumber,
				birthday: formatedBirthday,
				address: address,
				token,
			})
		)
	}

	useEffect(() => {
		if (!token) {
			navigate('/signIn')
		}
		if (userName) {
			navigate('/user/medicalCare')
		}
		if (putStatus === 'resolved' && !fetchStatus) {
			dispatch(fetchUser({ userId, token }))
		}
	}, [putStatus, fetchStatus])


	return (
		<>
		{putStatus === 'pending' ? <div className={s.localPreloader}><Preloader /></div>
			:
			<div className={s.wrapper}>
			<HeaderMobile />
			<div className={s.logoWrapper}>
				<img className={s.logo} src={logo} alt={'logo'} />
			</div>
			<div>
				<div className={s.headerText}>
					<h1>Заполните личные данные</h1>
				</div>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<h2>Общие Данные</h2>
					<div className={s.column}>
						<UserInformationInput
							placeholder='Фамилия'
							{...register('lastName', {
								required: true,
								pattern: {
									value: cyrrilicLatterRegex,
									message: 'Неккоретно введена фамилия',
								},
							})}
							error={!!errors.lastName}
						/>
						<UserInformationInput
							placeholder='Имя'
							{...register('firstName', { required: true, pattern: cyrrilicLatterRegex })}
							error={!!errors.firstName}
						/>
						<UserInformationInput
							placeholder='Отчество'
							{...register('patronymic', { required: true, pattern: cyrrilicLatterRegex })}
							error={!!errors.patronymic}
						/>
						<UserInformationInput
							placeholder='Номер телефона'
							{...register('phoneNumber', { required: true, pattern: phoneRegex })}
							error={!!errors.phoneNumber}
						/>
					</div>
					<h2>Дата Рождения</h2>
					{/* <div className={s.row}> */}
					<input
						{...register('birthday', { required: true })}
						type='date'
						style={{ color: 'black' }}
						className={!!errors.birthday ? s.errorWrapper : s.correct}
					/>
					{/* <UserInformationInput
							placeholder='День'
							{...register('day', { required: true, pattern: dayRegex })}
							error={!!errors.day}
						/>
						<UserInformationInput
							placeholder='Месяц'
							{...register('month', { required: true, pattern: monthRegex })}
							error={!!errors.month}
						/>
						<UserInformationInput
							placeholder='Год'
							{...register('year', { required: true, pattern: yearRegex })}
							list='cityname'
							error={!!errors.year}
						/> */}
					{/* </div> */}
					<h2>Место жительства</h2>
					<div className={s.column}>
						<UserInformationInput placeholder='Город' {...register('city', { required: true })} error={!!errors.city} />
						<UserInformationInput
							placeholder='Улица'
							{...register('street', { required: true })}
							error={!!errors.street}
						/>
						<UserInformationInput
							placeholder='Квартира'
							{...register('flatNumber', { required: true })}
							error={!!errors.flatNumber}
						/>
					</div>
					{Object.keys(errors).length ? <div className={s.errorWrapper}>Заполните все поля</div> : null}

					<button type='submit' className={s.btn}>
						Сохранить данные
					</button>
				</form>
			</div>
		</div>}
		</>
	)
}
