import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import style from "./MedicalCareList.module.css";
import React from "react";

const MedicalCareList = ({setIsSelectedCare, medicalCares}) => {
  return (
    <div className={style.medicalCareList}>
      {medicalCares.map((d) => {
        const price = d.price === 0 ? "Бесплатно" : `${d.price} рублей`;
        return (
          <ListItem
            key={d.id}
            component="div"
            disablePadding
            sx={{
              backgroundColor: "#EFEFEF",
              marginBottom: "10px",
              borderRadius: "5px",
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <ListItemButton onClick={() => {setIsSelectedCare({isSelect: true, id: d.id})}} sx={{
                '&:hover, &:focus': {
                    backgroundColor: "#FFFFFF",
                    border: '1px solid #244EB8',
                    borderRadius: '5px',
                    color: '#244EB8'
                  }
            }}>
              <ListItemText key={d.id} primary={d.name} sx={{maxWidth: {xs: '200px', md: '566px'}}}/>
              <ListItemText key={d.id} primary={price} sx={{textAlign: 'end'}}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </div>
  );
};

export default MedicalCareList;
