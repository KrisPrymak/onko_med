import React from 'react'
import logo from './../../media/logo-2-color 1.png'
import ButtonEnter from './ButtonEnter/ButtonEnter'
import HeaderMobile from './HeaderMobile/HeaderMobile'
import style from './Registration.module.css'
import RegistrationForm from './RegistrationForm/RegistrationForm'

function Registration() {

	return (
		<div className={style.container}>
			<HeaderMobile />
			<main className={style.main}>
				<ButtonEnter text='Войти' navLink='/signIn' />
				<div className={style.main__content}>
					<img className={style.main__logoDesktop} src={logo} alt='Логотип СККОД' />
					<RegistrationForm />
				</div>
			</main>
		</div>
	)
}

export default Registration
