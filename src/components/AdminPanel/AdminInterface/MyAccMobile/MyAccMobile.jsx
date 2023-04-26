import { Button } from '@mui/material';
import React from 'react';
import {Icon} from "@iconify/react";
import style from './MyAccMobile.module.css';

const MyAccMobile = () => {
    const styleSX = {
        button: {
            textTransform: 'none',
            fontWeight: '700',
            width: '100%',
            height: '48px',
        }
    }
    return (
        <div className={style.myAccountButton}>
                <Button variant={'contained'} sx={styleSX.button} endIcon={<Icon icon="material-symbols:menu" />}>
                    Мой аккаунт
                </Button>

            </div>
    );
};

export default MyAccMobile;