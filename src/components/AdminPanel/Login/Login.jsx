import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../media/logo.svg'
import { getToken } from '../../../store/AuthSlice'
import ButtonEnter from '../../Registration/ButtonEnter/ButtonEnter'
import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import { clearUser, clearIsFetchSuccess, fetchUser } from '../../../store/UserSlice'

export const Login = () => {
	const navigate = useNavigate()
	const demo = useSelector(state => state.user.demo)
	const error = useSelector(state => state.auth.error)
	const userId = useSelector(state => state.auth.id)
	const token = useSelector(state => state.auth.token)
	const authStatus = useSelector(state => state.auth.status)
	const fetchUserStatus = useSelector(state => state.user.status)
	const role = useSelector(state => state.auth.role)
	const email = useSelector(state => state.user.email)
	const userName = useSelector(state => state.user.firstName)

	const dispatch = useDispatch()

	useEffect(() => {
		if (!email && authStatus === 'resolved') {
			dispatch(fetchUser({ userId, token }))
		}
		if (email && role === 'ROLE_USER') {
			navigate('/loadingPage')
		}
		if (email && role === 'ROLE_ADMIN') {
			navigate('/admin/*')
		}
	}, [dispatch, authStatus, email])
	return (
		<div className={s.loginWrapper}>
			<div className={s.buttonEnter__wrapper}>
				<ButtonEnter text='Зарегистрироваться' navLink={'/signUp'} />
			</div>
			<div className={s.logoWrapper}>
				<img className={s.logo} src={logo} alt={'logo'} />
			</div>
			<LoginForm />
			{/* <form className={s.loginForm}>
				<h1 className={s.loginTitle}>Вход</h1>
				<TextField
					label='Email'
					value={login}
					variant='outlined'
					sx={styleSX.loginInput}
					onChange={e => setLogin(e.target.value)}
				/>
				<TextField
					label='Пароль'
					value={password}
					variant='outlined'
					sx={styleSX.passwordInput}
					type={'password'}
					onChange={e => setPassword(e.target.value)}
				/>
				{error && <div className={s.error}>Неверный логин или пароль</div>}
				<Button type='submit' onClick={submitHandler} variant='contained' sx={styleSX.button}>
					Войти
				</Button>
			</form> */}
		</div>
	)
}
const styleSX = {
	loginInput: {
		marginBottom: '15px',
		width: '100%',
	},
	passwordInput: {
		marginBottom: '20px',
	},
	button: {
		mt: '30px',
		backgroundColor: 'primary',
		zIndex: 1,
		fontFamily: `"Tahoma", "Verdana", sans-serif`,
		textTransform: 'none',
		fontWeight: 'fontWeightBold',
		width: '255px',
		height: '48px',
	},
}