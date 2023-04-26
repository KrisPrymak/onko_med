import { TabTitle } from '../../../../common/TabTitle/TabTitle'
import ButtonBack from '../../../../common/ButtonBack/ButtonBack'
import NewsTextarea from './NewsTextarea/NewsTextarea'
import { NavLink } from 'react-router-dom'

const CreateNewsItem = () => {

	return (
		<div style={{paddingBottom: '10px'}}>
			<TabTitle title='Новая новость' />
			<div style={{ marginBottom: '50px' }}>
				<NavLink to={'/admin/newsManagement/'}>
					<ButtonBack />
				</NavLink>
			</div>
			<NewsTextarea />
		</div>
	)
}

export default CreateNewsItem
