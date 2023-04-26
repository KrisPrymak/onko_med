import { Navigate, Route, Routes } from 'react-router-dom'
import UserPanel from './common/UserPanel/UserPanel'
import { Login } from './AdminPanel/Login/Login'
import React from 'react'
import Registration from './Registration/Registration'
import { AdminInterface } from './AdminPanel/AdminInterface/AdminInterface'
import { useSelector } from 'react-redux'
import LoadingPage from './LoadingPage'
import { UserInformation } from './AdminPanel/AdminInterface/UserInformation/UserInformation'

export const PATH = {
	SIGN_IN: '/signIn',
	SIGN_UP: '/signUp',
	ADMIN: '/admin/*',
	USER: {
		MAIN: '/user/*',
		SIGN_IN: '/register',
	},
}

const PrivateRoute = ({ children }) => {
	const token = useSelector(state => state.auth.token)
	return token ? children : <Navigate to={PATH.SIGN_IN} />
}

export const Pages = () => {
	// const role = useSelector(state => state.auth.role)
	return (
		<Routes>
			<Route path={'/loadingPage'} element={<LoadingPage />} />
			<Route path={'/'} element={<Navigate to={PATH.SIGN_UP} />} />
			<Route path={PATH.SIGN_IN} element={<Login />} />
			<Route path={PATH.SIGN_UP} element={<Registration />} />
			<Route path={'/userInfo'} element={<UserInformation />} />
			<Route
				path={PATH.ADMIN}
				element={
					<PrivateRoute>
						<AdminInterface />
					</PrivateRoute>
				}
			/>{' '}
			{/* Employee admin */}
			<Route
				path={PATH.USER.MAIN}
				element={
					<PrivateRoute>
						<UserPanel />
					</PrivateRoute>
				}
			/>{' '}
			{/* User admin */}
			<Route path={'*'} element={<div>Error</div>} />
		</Routes>
	)
}
