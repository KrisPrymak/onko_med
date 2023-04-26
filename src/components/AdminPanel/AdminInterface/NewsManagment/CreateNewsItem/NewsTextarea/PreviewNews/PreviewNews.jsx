import React from 'react';
import style from './PreviewNews.module.css';

const PreviewNews = ({newsText, creationDate}) => {
    return (
        <div>
            <div className={style.subtitle} style={{ marginBottom: '15px' }}>
				Предпросмотр
			</div>
			<div className={style.newsItem}>
				<div className={style.newsItem__info}>
					{newsText ? newsText : '...'}
				</div>
				<div className={style.newsItem__info}></div>
				<div className={style.newsItem__date}>{creationDate}</div>
			</div>
        </div>
    );
};

export default PreviewNews;