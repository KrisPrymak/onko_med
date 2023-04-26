import { Button } from "@material-ui/core";
import React from "react";
import style from "./PopupCancelQuest.module.css";
import questionRound from "./../../../media/questionRound.svg";
import BlueButton from "../../common/BlueButton/BlueButton";

const PopupMiniTemplate = ({
  handleClick,
  closeAllModal,
  removeConsult,
  id,
}) => {
  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <img
            className={style.popup__img}
            src={questionRound}
            alt="question_round"
          />
          <h1 className={style.popup__title}>Отмена консультации</h1>
          <p className={style.popup__description}>
            Вы уверены, что хотите отменить консультацию врача-онколога?{" "}
          </p>
          <div className={style.popup__buttons}>
            <BlueButton
              text="Не отменять"
              handleClick={closeAllModal}
              width="100%"
            />
            <Button
              style={{
                width: "100%",
                border: "1px solid #FF0000",
                color: "#FF0000",
                textTransform: "none",
                fontWeight: "700",
              }}
              variant="outlined"
              onClick={() => {
                removeConsult(id);
              }}
            >
              Отменить консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMiniTemplate;
