import React from "react";
import BlueButton from "../../common/BlueButton/BlueButton";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import style from "./PayTutorial.module.css";

const PayTutorial = ({ setIsOpenPayTutorial, setIsFirstEnter }) => {

  const closeCurrentPage = () => {
    setIsOpenPayTutorial(false);
    setIsFirstEnter(false)
  }
  return (
    <div className={style.container}>
      <ButtonBack
        handleClick={closeCurrentPage}
      />
      <div className={style.content}>
        <div>
          <h2 className={style.title}>Оплата в регистратуре</h2>
          <p>
            «Оплата регистратуре» означает возможность для пациентов оплачивать
            свои медицинские услуги во время их посещения. Это включает в себя
            покрытие расходов на консультации и процедуры. Платежи могут
            производиться различными способами, такими как наличные,
            кредитные/дебетовые карты или страховка.
          </p>
        </div>
        <div>
          <h2 className={style.title}>Оплата онлайн</h2>
          <p>
            «Оплата онлайн» предоставляет пациентам возможность безопасно
            оплатить свои медицинские услуги, не выходя из собственного дома.
            Это включает в себя покрытие расходов на консультации и процедуры.
            Принимаются различные способы оплаты, такие как кредитные/дебетовые
            карты и электронный перевод средств. Эта услуга предназначена для
            того, чтобы сделать процесс оплаты быстрым, простым и безопасным.
          </p>
        </div>
      </div>
      <BlueButton width='320px' text='Оплатить онлайн' handleClick={closeCurrentPage}/>
    </div>
  );
};

export default PayTutorial;
