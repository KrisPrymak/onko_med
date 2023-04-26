import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearReg, signUp } from "../../../store/RegSlice.js";
import style from "./RegistrationForm.module.css";
import PopupSuccess from "../PopupSuccess/PopupSuccess";
import Preloader from "../../common/Preloader/Preloader.jsx";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const regError = useSelector((state) => state.reg.error);
  const status = useSelector((state) => state.reg.status);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(signUp(data.email));
  };

  const watchEmail = watch("email");

  useEffect(() => {
    dispatch(clearReg());
  }, [dispatch, watchEmail]);

  return (
    <div className={style.wrapper}>
      {status === "resolved" && <PopupSuccess />}
      {status === "pending" ? (
        <div className={style.localPreloader}>
          <Preloader />
        </div>
      ) : (
        <form
          className={style.registration__form}
          action="#0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={style.registration__title}>Регистрация</h1>
          <input
            // name='email'
            placeholder="Email"
            className={
              errors.email
                ? `${style.registration__input} ${style.registration__inputError}`
                : style.registration__input
            }
            {...register("email", {
              required: "Заполните все поля",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Некорректный email",
              },
            })}
          />

          <label className={style.registration__checkboxGroup}>
            <input
              // name='checkbox'
              type="checkbox"
              className={style.registration__checkbox}
              {...register("checkbox", {
                required: "Заполните все поля",
              })}
            />
            <span className={style.registration__checkboxText}>
              Согласен на <a href="#0">обработку персональных данных</a>
            </span>
          </label>
          {errors.email ? (
            <div className={style.registration__errorValidate}>
              {errors.email.message}
            </div>
          ) : (
            errors.checkbox && (
              <div className={style.registration__errorValidate}>
                {errors.checkbox.message}
              </div>
            )
          )}

          {regError && (
            <div className={style.registration__errorValidate}>
              Данный email уже используется
            </div>
          )}

          <Button
            type="submit"
            className={style.registration__submit + " " + style.button}
            variant="contained"
            sx={{
              mt: "30px",
              backgroundColor: "primary",
              zIndex: 1,
              fontFamily: `"Tahoma", "Verdana", sans-serif`,
              textTransform: "none",
              fontWeight: "fontWeightBold",
            }}
          >
            Зарегистрироваться
          </Button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
