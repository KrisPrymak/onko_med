import { Container } from '@mui/system'
import s from './ChangeDateModal.module.css'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useState } from 'react'
import ChangeSuccess from './ChangeSuccess/ChangeSuccess'

const ChangeDateModal = props => {
	const [date, setDate] = useState(null)
	const [time, setTime] = useState(null)

	const dateSelectHandler = e => {
		setDate(e.target.value)
	}

	const timeSelectHandler = e => {
		setTime(e.target.value)
	}

	const [modalType, setModalType] = useState(null)

	const handleCancel = () => {
		setModalType('change')
	}

	return (
		<Container>
			{modalType ? (
				<ChangeSuccess close={props.close} />
			) : (
				<div className={s.window}>
					<div className={s.content}>
						<button onClick={props.close} className={s.crossBtn}>
							<svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.585 2.41467L2.41455 20.5851M20.585 20.5851L2.41455 2.41467L20.585 20.5851Z'
									stroke='#2C60E3'
									stroke-width='3'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
						<div className={s.main}>
							<div className={s.title}>Перенос даты и времени оказания услуги</div>
							<div className={s.topInfo}>
								<div className={s.infoItemName}>Наименование:</div>
								<div className={s.infoItemValue}>Прием (осмотр, консультация) врача-онколога первичный</div>
							</div>
							<div className={s.bottomInfo}>
								<div className={s.infoItem}>
									<div className={s.infoItemName}>Дата:</div>
									<div className={s.infoItemValue}>12.01.2023</div>
								</div>
								<div className={s.infoItem}>
									<div className={s.infoItemName}>Время:</div>
									<div className={s.infoItemValue}>13:00</div>
								</div>

								<div className={s.selects}>
									<div className={s.dateSelect}>
										<div className={s.selectTitle}>Новая дата</div>
										<FormControl sx={{ m: 0, width: '100%', height: '44px' }}>
											<Select
												onChange={dateSelectHandler}
												sx={{ height: '44px' }}
												labelId='demo-simple-select-autowidth-label'
												defaultValue={date}
											>
												<MenuItem value={'14.02.2023'}>14.02.2023</MenuItem>
												<MenuItem value={'14.02.2023'}>14.02.2023</MenuItem>
												<MenuItem value={'14.02.2023'}>14.02.2023</MenuItem>
											</Select>
										</FormControl>
									</div>
									<div className={s.timeSelect}>
										<div className={s.selectTitle}>Новое время</div>
										{!date ? (
											<FormControl sx={{ m: 0, width: '100%' }}>
												<Select
													onChange={timeSelectHandler}
													sx={{ height: '44px' }}
													labelId='demo-simple-select-autowidth-label'
													defaultValue={time}
												>
													<MenuItem value=''></MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
												</Select>
											</FormControl>
										) : (
											<FormControl sx={{ m: 0, width: '100%' }}>
												<Select
													onChange={timeSelectHandler}
													sx={{ height: '44px' }}
													labelId='demo-simple-select-autowidth-label'
													defaultValue={time}
												>
													<MenuItem value=''></MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
													<MenuItem value={'13:00'}>13:00</MenuItem>
												</Select>
											</FormControl>
										)}
									</div>
								</div>
								{!time ? (
									<Button onClick={handleCancel} sx={{ width: '100%', p: '11px 0px' }} variant='contained' color='info' disabled>
										Перенести талон
									</Button>
								) : (
									<Button onClick={handleCancel} sx={{ width: '100%', p: '11px 0px' }} variant='contained'>
										Перенести талон
									</Button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</Container>
	)
}

export default ChangeDateModal
