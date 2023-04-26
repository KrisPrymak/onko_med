import s from './LoadingPage.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearAuthStatus } from '../store/AuthSlice'
import { clearUserStatus } from '../store/UserSlice'
import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const demo = useSelector(state => state.user.demo)
	const userName = useSelector(state => state.user.firstName)
	const fetchUserStatus = useSelector(state => state.user.status)

	useEffect(() => {
		dispatch(clearAuthStatus())
		dispatch(clearUserStatus())
		if (demo === true && userName) {
			navigate('/user/medicalCare')
		}
		if (demo === false) {
			navigate('/user/*')
		}
		if (!userName) {
			navigate('/userInfo')
		}
	}, [])

	return (
		<div className={s.wrapper}>
			<span style={{ color: '#2C60E3', fontSize: '35px' }}><CircularProgress /></span>
		</div>
	)
}

export default LoadingPage
