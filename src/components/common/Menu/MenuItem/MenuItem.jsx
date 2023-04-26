import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MenuItem.module.css'
import { useSelector } from 'react-redux'

const activeStyle = {
	backgroundColor: '#2c60e3',
	color: '#ffffff',
	paddingLeft: '10px',
}
const disabled = {
	color: '#B8B8B8',
}

export const MenuItem = (props) => {

	const demo = useSelector(state => state.user.demo)

	return (
		<>
			{demo ? (
				props.noDemo ? (
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className={s.item} to={props.path}>
						{props.children}
						<p className={s.itemText}>{props.text}</p>
					</NavLink>
				) : (
					<NavLink style={disabled} className={s.itemDisabled} to={'#'}>
						{props.children}
						<p className={s.itemText}>{props.text}</p>
					</NavLink>
				)
			) : (
				<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className={s.item} to={props.path}>
					{props.children}
					<p className={s.itemText}>{props.text}</p>
				</NavLink>
			)}
		</>

		// 	<NavLink
		// 	style={({ isActive }) => (isActive ? activeStyle : undefined)}
		// 	className={s.item}
		// 	to={props.path}
		// >
		// 	{props.children}
		// 	<p className={s.itemText}>{props.text}</p>
		// </NavLink>
	)
}
