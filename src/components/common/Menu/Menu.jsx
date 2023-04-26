import React, { useEffect } from 'react'

import userAvatar from '../../../media/avatar.svg'
import { MenuItem } from './MenuItem/MenuItem'
import s from './Menu.module.css'
import { Icon } from '@iconify/react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../store/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, fetchUser } from '../../../store/UserSlice'

export const Menu = ({ avatar, menuData }) => {
	const navigate = useNavigate()
	const ava = avatar ? avatar : userAvatar
	const demo = useSelector(state => state.user.demo)
	const userName = useSelector(state => state.user.firstName)
	const userPatronymic = useSelector(state => state.user.patronymic)
	const userId = useSelector(state => state.auth.id)
	const token = useSelector(state => state.auth.token)
	// const userFetchStatus = useSelector(state => state.user.status)
	const role = useSelector(state => state.auth.role)

	const dispatch = useDispatch()

	const exitHandler = () => {
		dispatch(logout())
		dispatch(clearUser())
		navigate('/signIn')
	}

	useEffect(() => {
		if (role === 'ROLE_USER') dispatch(fetchUser({ userId, token }))
	}, [])

	return (
				<div className={s.menuWrapper}>
				<>
					<div className={s.userInfo}>
						<div className={s.avatarContainer}>
							<img className={s.avatar} src={ava} alt={'ava'} />
						</div>
						<div className={s.userTextInfo}>
							<p className={s.userTitle}>
								{userName} {userPatronymic}
							</p>
							<p className={s.userId}>ID: {userId}</p>
						</div>
						{demo && (
							<div className={s.demoInfo}>
								<p>
									Вы находитесь в статусе <span style={{ fontWeight: 'bold' }}>Гостя</span>. Посетите регистратуру для
									полноценного использования личного кабинета клиники.
								</p>
							</div>
						)}
					</div>
					<div className={s.menuList}>
						{menuData.map(d => {
							return (
								<MenuItem key={d.id} text={d.text} path={d.path} demo={demo} noDemo={d.noDemo}>
									<Icon icon={d.icon} />
								</MenuItem>
							)
						})}
					</div>
					<Button variant={'text'} sx={{ color: 'red', textTransform: 'none', fontSize: '18px' }} onClick={exitHandler}>
						<Icon icon='ph:sign-in-duotone' />
						<span className={s.gate__button_text}>Выход</span>
					</Button>
					</>
				</div>)
}
