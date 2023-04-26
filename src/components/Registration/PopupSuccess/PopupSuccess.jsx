import {Button} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./PopupSuccess.module.css";
import { useDispatch } from 'react-redux'
import { clearReg } from '../../../store/RegSlice'

const PopupSuccess = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const onClick = () => {
        dispatch(clearReg())
        navigate('/signIn')
    }

    return (
        <div className={style.popupBg}>
            <div className={style.popup}>
                <h1 className={style.popup__title}>Пароль выслан на почту</h1>
                <div className={style.popup__text}>
                Перейдите на страницу авторизации и войдите используя номер телефона и присланный пароль.
                </div>
                <Button
                    sx={{
                        fontFamily: `"Tahoma", "Verdana", sans-serif`,
                        textTransform: "none",
                        fontWeight: "fontWeightBold",
                    }}
                    variant="contained"
                    className={style.popup__buttonDesktop + " " + style.button}
                    onClick={onClick}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
};

export default PopupSuccess;
