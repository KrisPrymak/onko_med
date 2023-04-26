import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNews } from "../../../store/NewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { TabTitle } from "../../common/TabTitle/TabTitle";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import style from "./NewsItemPage.module.css";
import { Button } from "@mui/material";
import NewsDeletePopup from '../NewsDeletePopup/NewsDeletePopup';
import { formatDate } from "../../../hooks/formatDate";

const NewsItemPage = () => {
  const params = useParams();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const newsItem = newsList.filter((item) => item.id === +params.id)[0];
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchNews([false, token]));
  }, [dispatch]);
  const [modalDelete, setModalDelete] = useState(false)
  const handleDelete = () => {
    setModalDelete(true)
  }

  const checkEndDate = (date) => {
    if (date) {
      return formatDate(date);
    } else {
      return '-';
    }
  }

  return (
    <div>
        {modalDelete && <NewsDeletePopup setModalDelete={setModalDelete} idDeleteNews={newsItem.id}/>}
      <TabTitle title="Просмотр новости" />
      <ButtonBack handleClick={() => navigate(-1)}  />
      <div className={style.container}>
        <div>
          <h3 className={style.title}>Текст новости</h3>
          <p className={style.text}>{newsItem.text}</p>
        </div>
        <div className={style.dates}>
            <div>
                <h3 className={style.title}>Дата публикации новости</h3>
                <p className={style.text}>{formatDate(newsItem.creationDate)}</p>
            </div>
            <div>
                <h3 className={style.title}>Дата удаления новости</h3>
                <p className={style.text}>{checkEndDate(newsItem.endDate)}</p>
            </div>
        </div>
        <Button sx={{width: '350px', height: '48px', fontWeight: '700', textTransform: 'none'}} variant='outlined' color='error' onClick={handleDelete}>Удалить новость</Button>
      </div>
    </div>
  );
};

export default NewsItemPage;
