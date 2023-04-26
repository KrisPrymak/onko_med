import { Button, Grid, ThemeProvider, createTheme } from '@mui/material'
import { Icon } from '@iconify/react'
import s from './Service.module.css'
import qrCode from '../../../../media/qrCode.svg'
import ServiceInfoItem from './ServiceInfoItem/ServiceInfoItem'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import ChangeDateModal from './Modals/ChangeDateModal/ChangeDateModal'
import CancelCouponModal from './Modals/Cancel/CancelCouponModal'

const Service = props => {
	const serviceTopData = [
		{ name: 'Врач:', value: 'Полетаева Н. А.' },
		{ name: 'Дата:', value: '12.01.2023' },
		{ name: 'Время:', value: '15:00' },
	]
	const serviceBottomData = [
		{ name: 'Профиль врача:', value: 'Нет специальных требований' },
		{ name: 'Стоимость услуги:', value: 'Нет специальных требований' },
		{ name: 'Дата оплаты:', value: 'Нет специальных требований' },
		{ name: 'Место оказания:', value: 'Нет специальных требований' },
		{ name: 'Подготовка к приёму:', value: 'Нет специальных требований' },
		{ name: 'QR-код услуги:', qr: qrCode },
	]

	const [isModal, setIsModal] = useState(false)
	const [modalType, setModalType] = useState(null)

	const handleOpenModal = e => {
		setModalType(e.target.id)
		setIsModal(true)
	}
	const handleCloseModal = () => {
		setIsModal(false)
	}

	const theme = createTheme({
		palette: {
			primary: {
				main: '#2c60e3',
			},
			error: {
				main: '#FF0000',
			},
			info: {
				main: '#757575',
			},
		},
		typography: {
			fontFamily: `"Tahoma", "Verdana", sans-serif`,
			fontWeightRegular: 400,
			fontWeightBold: 700,
			fontSize: 16,
			textTransform: 'none',
		},
		
	})

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Button
					variant={'outlined'}
					color={'primary'}
					sx={{ marginBottom: '30px', width: '137px', textTransform: 'none' }}
				>
					<Icon icon='material-symbols:arrow-back' />
					Назад
				</Button>
				<Modal open={isModal} onClose={handleCloseModal}>
					{modalType === 'change' ? (
						<ChangeDateModal close={handleCloseModal} />
					) : (
						<CancelCouponModal close={handleCloseModal} />
					)}
				</Modal>

				<div className={s.title}>Прием (осмотр, консультация) врача-онколога первичный</div>

				<div className={s.topInfo}>
					{serviceTopData.map(infoItem => (
						<ServiceInfoItem name={infoItem.name} value={infoItem.value} key={infoItem.name} />
					))}
				</div>
				<div className={s.bottomInfo}>
					{serviceBottomData.map(infoItem => (
						<ServiceInfoItem name={infoItem.name} value={infoItem.value} qr={infoItem.qr} key={infoItem.name} />
					))}
				</div>
				<div className={s.btnGroup}>
					<Grid container columnSpacing={3} rowSpacing={1.5}>
						<Grid item xs={12} sm={6}>
							<Button sx={{ width: '100%' }} variant='outlined' id='change' onClick={handleOpenModal}>
								Перенести талон
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button sx={{ width: '100%' }} variant='outlined' id='cancel' onClick={handleOpenModal}>
								Отменить талон
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button sx={{ width: '100%' }} variant='contained'>
								Подтвердить посещение
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default Service
