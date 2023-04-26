import { Button } from '@mui/material'
import { Icon } from '@iconify/react'
import s from './CouponList.module.css'

const CouponList = () => {
	return (
		<div>
			<Button variant={'outlined'} color={'primary'} sx={{ marginBottom: '20px', textTransform: 'none' }}>
				<Icon icon='material-symbols:arrow-back' />
				Назад
			</Button>
			<div className={s.content}>
				<div className={s.title}>Список талонов на 16 января 2023</div>
				<div className={s.list}>
					<button className={s.listItem}>
						<div className={s.text}>Общий (клинический) анализ крови развернутый</div>
						<div className={s.time}>9:00</div>
					</button>
					<button className={s.listItem}>
						<div className={s.text}>Общий (клинический) анализ крови развернутый</div>
						<div className={s.time}>9:00</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CouponList
