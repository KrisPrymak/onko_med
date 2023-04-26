import { Button, ThemeProvider, createTheme } from '@mui/material'
import { Container } from '@mui/system'
import s from './CancelCouponModal.module.css'
import { useState } from 'react'
import CancelSuccess from './CancelSuccess/CancelSuccess'

const CancelCouponModal = props => {


	const [modalType, setModalType] = useState(null)

	const handleCancel = () => {
		setModalType('cancel')
	}

	return (
			<Container>
				{modalType ? (
					<CancelSuccess close={props.close} />
				) : (
					<div className={s.modal}>
						<div className={s.content}>
							<div className={s.icon}>
								<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M24.9996 49.2555C38.245 49.2555 49.2553 38.2691 49.2553 25C49.2553 11.7545 38.2213 0.744385 24.9759 0.744385C11.7066 0.744385 0.744141 11.7545 0.744141 25C0.744141 38.2691 11.7304 49.2555 24.9996 49.2555ZM24.9996 45.2129C13.7755 45.2129 4.81039 36.2241 4.81039 25C4.81039 13.7996 13.7517 4.787 24.9759 4.787C36.1762 4.787 45.1887 13.7996 45.2127 25C45.2365 36.2241 36.2 45.2129 24.9996 45.2129ZM24.5002 29.9224C25.6892 29.9224 26.4265 29.1852 26.4265 28.234V27.9487C26.4265 26.6169 27.1874 25.7847 28.852 24.6908C31.1586 23.1689 32.7994 21.7659 32.7994 18.936C32.7994 14.9649 29.2801 12.8484 25.2374 12.8484C21.1472 12.8484 18.4601 14.7746 17.8181 16.9623C17.6992 17.3666 17.6041 17.7471 17.6041 18.1513C17.6041 19.1976 18.4601 19.7922 19.2448 19.7922C20.6004 19.7922 20.8144 19.055 21.5753 18.1751C22.36 16.8673 23.5015 16.0824 25.0947 16.0824C27.2587 16.0824 28.6618 17.2953 28.6618 19.1263C28.6618 20.7434 27.663 21.5281 25.5941 22.9549C23.8819 24.1439 22.5978 25.4042 22.5978 27.7346V28.0438C22.5978 29.3041 23.2875 29.9224 24.5002 29.9224ZM24.4527 37.0326C25.8319 37.0326 27.0209 35.9387 27.0209 34.5595C27.0209 33.1564 25.8556 32.0864 24.4527 32.0864C23.0496 32.0864 21.8845 33.1803 21.8845 34.5595C21.8845 35.9149 23.0734 37.0326 24.4527 37.0326Z'
										fill='#244EB8'
									/>
								</svg>
							</div>
							<div className={s.title}>Отменить талон</div>
							<div className={s.text}>
								Вы уверены, что хотите отменить талон на прием (осмотр, консультация) врача-онколога первичный?
							</div>
							<div className={s.btnGroup}>
								<Button onClick={props.close} variant='contained' sx={{ fontWeight: '700', width: '255px', p: '12px' }}>
									Не отменять
								</Button>
								<Button onClick={handleCancel} variant='outlined' color='error' sx={{ fontWeight: '700', width: '255px', p: '12px' }} xs={{}}>
									Отменить талон
								</Button>
							</div>
						</div>
					</div>
				)}
			</Container>
		
	)
}

export default CancelCouponModal
