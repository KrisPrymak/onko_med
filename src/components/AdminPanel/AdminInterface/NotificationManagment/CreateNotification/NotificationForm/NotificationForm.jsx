import React from 'react'
import TextField from '@material-ui/core/TextField'
import s from './NotificationForm.module.css'
import BlueButton from '../../../../../common/BlueButton/BlueButton'
import { useState } from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const NotificationForm = props => {
	const [notificationText, setNotificationText] = useState('')
	const [user, setUser] = useState(null)

	const selectHandler = e => {
		setUser(e.target.value)
	}

	const textareaHandler = e => {
		setNotificationText(e.target.value)
	}

	return (
		<>
			<form className={s.form}>
				<div className={s.subtitle}>Кому</div>

				<FormControl sx={{ width: '350px', mb: '15px' }}>
					<InputLabel sx={{ textAlign: 'center' }} id='chosen'>
						Выберите пользователя
					</InputLabel>
					<Select IconComponent={ExpandMoreIcon} id='chosen' label='Выберите пользователя' onChange={selectHandler}>
						<MenuItem value={'User'}>User</MenuItem>
					</Select>
				</FormControl>

				<div className={s.subtitle}>Текст уведомления</div>
				<TextField
					style={{ marginBottom: '30px' }}
					variant='outlined'
					placeholder='Текст уведомления'
					fullWidth
					multiline
					maxRows={5}
					minRows={5}
					value={notificationText}
					onChange={textareaHandler}
				/>
				<BlueButton disabled={!notificationText || !user} text={'Опубликовать новость'} width={'320px'} />
			</form>
			<div className={s.subtitle} style={{ marginBottom: '15px' }}>
				Предпросмотр
			</div>
			<div className={s.newsItem}>
				<div className={s.newsItem__info}>{notificationText ? notificationText : '...'}</div>
				<div className={s.newsItem__info}></div>
				<div className={s.newsItem__date}>27.02.2023</div>
			</div>
		</>
	)
}

export default NotificationForm
