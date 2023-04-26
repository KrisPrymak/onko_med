import React from "react";
import { formatDate } from "../../../hooks/formatDate";
import style from "./NewsItem.module.css";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsItem = ({ newsData }) => {
  
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      {newsData.map((n) => {
        return (
          <>
            {role === "ROLE_ADMIN" ? (
              <ListItem
                key={n.id}
                component="div"
                disablePadding
                sx={{
                  backgroundColor: "#EFEFEF",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemButton
                  onClick={() => navigate(`/admin/newsItemPage/${n.id}`)}
                  sx={{
                    "&:hover, &:focus": {
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #244EB8",
                      borderRadius: "5px",
                      color: "#244EB8",
                    },
                  }}
                >
                  <ListItemText
                    primary={n.text}
                    secondary={formatDate(n.creationDate)}
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <div className={style.newsItem} key={n.id}>
                <div>
                  <div className={style.newsItem__info}>{n.text}</div>
                  <div className={style.newsItem__date}>
                    {formatDate(n.creationDate)}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default NewsItem;
