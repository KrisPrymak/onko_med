import React from 'react';
import style from './CheckboxGroup.module.css';

const CheckboxGroup = () => {
    return (
        <label className={style.checkboxGroup}>
        <input
            type='checkbox'
            className={style.checkbox}
            
        />
        <span className={style.checkboxText}>
            Подтвердить действие
        </span>
    </label>
    );
};

export default CheckboxGroup;