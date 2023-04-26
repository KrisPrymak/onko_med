import React from 'react';
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.container}>
            <div className={style.hourglass}>
        </div>
        </div>
    );
};

export default Preloader;