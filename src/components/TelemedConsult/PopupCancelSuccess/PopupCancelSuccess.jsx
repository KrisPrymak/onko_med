import React from 'react';
import style from './PopupCancelSuccess.module.css';
import cancelRound from './../../../media/cancelRound.svg';
import BlueButton from '../../common/BlueButton/BlueButton';

const PopupCancelSuccess = ({closeAllModal}) => {
    return (
        <div className={style.popupBg}>
            <div className={style.popup}>
                <div className={style.popup__content}>
                <img className={style.popup__img} src={cancelRound} alt="cancel_round" />
                <h1 className={style.popup__title} >Консультация успешно отменена</h1>
                <BlueButton text='Перейти к консультациям' handleClick={closeAllModal} width='313px'/>
                </div>
            </div>
        </div>
    );
};

export default PopupCancelSuccess;