import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/NewsSlice";
import { TabTitle } from "../common/TabTitle/TabTitle";
import NewsItem from "./NewsItem/NewsItem";
import Preloader from "../common/Preloader/Preloader";

const News = () => {
  const newsData = useSelector((state) => state.news.newsList);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.news.status);

  useEffect(() => {
    dispatch(fetchNews([true, token]));

    return () => {
      // dispatch(clearNews())
    };
  }, [dispatch]);
  return (
    <div>
      <TabTitle title={"Новости"} />
      {status === "pending" ? <Preloader /> : <NewsItem newsData={newsData} />}
    </div>
  );
};

export default News;
