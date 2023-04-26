import React from "react";
import TextField from "@material-ui/core/TextField";
import s from "./NewsTextarea.module.css";
import BlueButton from "../../../../../common/BlueButton/BlueButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewsItem } from "../../../../../../store/NewsSlice";
import PreviewNews from "./PreviewNews/PreviewNews";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { formatDate } from "../../../../../../hooks/formatDate";

const NewsTextarea = () => {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()

  const [newsText, setNewsText] = useState("");
  const textareaHandler = (e) => {
    setNewsText(e.target.value);
  };

  const [creationDate, setCreationDate] = useState(new Date().toISOString())
  const [endDate, setEndDate] = useState(null)

  

  const handleChangeCreationDate = (e) => {
	if (e) {
		setCreationDate(e.$d.toISOString())
	} else {
		setCreationDate(new Date().toISOString())
	}
  }

  const handleChangeEndDate = (e) => {
	if (e) {
		setEndDate(e.$d.toISOString())
	} else {
		setEndDate(null)
	}
  }

  const sendNews = () => {
    dispatch(postNewsItem([
      {
        text: newsText,
        creationDate,
        endDate
      }, token
    ]))
    setNewsText('')
    setCreationDate(new Date().toISOString())
    setEndDate(null)
    };
    
  return (
    <>
      <form className={s.form}>
        <div className={s.subtitle}>Текст новости</div>
        <TextField
          style={{ marginBottom: "30px" }}
          variant="outlined"
          placeholder="Напишите текст новости"
          fullWidth
          multiline
          maxRows={5}
          minRows={5}
          value={newsText}
          onChange={textareaHandler}
        />
        <div className={s.dates}>
          <DatePicker
            defaultValue={dayjs(formatDate(new Date()), "DD.MM.YYYY")}
			onChange={handleChangeCreationDate}
            placeholder="Дата публикации"
            format="DD.MM.YYYY"
          />
          <DatePicker 
          value={endDate ? dayjs(formatDate(endDate), "DD.MM.YYYY") : null}
		  onChange={handleChangeEndDate}
		  placeholder="Дата удаления" format="DD.MM.YYYY" />
        </div>
        <BlueButton
          disabled={!newsText}
          text={"Опубликовать новость"}
          width={"320px"}
          handleClick={sendNews}
        />
      </form>
      <PreviewNews newsText={newsText} creationDate={formatDate(creationDate)} />
    </>
  );
};

export default NewsTextarea;
