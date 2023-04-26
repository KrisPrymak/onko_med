import style from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../../store/AuthSlice";
import Preloader from "../../../common/Preloader/Preloader";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = ({ email, password }) => {
    dispatch(getToken({ email, password }));
  };

  const watchEmail = watch("email");
  const watchPassword = watch("password");

  return (
    <div className={style.wrapper}>
      {status === "pending" ? (
        <div className={style.localPreloader}>
          <Preloader />
        </div>
      ) : (
        <form
          className={style.form}
          action="#0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={style.title}>Вход в личный кабинет</h1>
          <input
            name="email"
            placeholder="Email"
            className={
              errors.email ? `${style.input} ${style.inputError}` : style.input
            }
            {...register("email", {
              required: "Заполните все поля",
              // pattern: {
              // 	value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              // 	message: 'Некорректный email',
              // },
            })}
          />

          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className={
              errors.password
                ? `${style.input} ${style.inputError}`
                : style.input
            }
            {...register("password", {
              required: "Заполните все поля",
            })}
          />
          {errors.email ? (
            <div className={style.errorValidate}>{errors.email.message}</div>
          ) : (
            errors.password && (
              <div className={style.errorValidate}>
                {errors.password.message}
              </div>
            )
          )}
          {authError && (
            <div className={style.errorValidate}>Неверный email или пароль</div>
          )}

          <Button
            type="submit"
            className={style.submit + " " + style.button}
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
            Войти
          </Button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
