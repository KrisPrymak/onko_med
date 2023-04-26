import { List, ListItemButton } from '@mui/material';
import React, { useState } from 'react';
import style from './ConsultsPayList.module.css';

const ConsultsPayList = ({consultsList}) => {
    const [idList, setIdList] = useState([])
    
    const toggleClick = (id) => {
        if (idList.includes(id)) {
            setIdList(idList.filter(a => a !== id))
        } else {
            setIdList([...idList, id])
        }
    }
    return (
        <List className={style.list}>
            {consultsList.map(s => {
                return (
                    <ListItemButton key={s.id} className={idList.includes(s.id) ? style.list__item_select : style.list__item} onClick={() => toggleClick(s.id)}>
                        <h2 className={style.item__title}>{s.text}</h2>
                        <div className={style.item__info}>
                            <div className={style.item__info_part}>
                                <p>Сумма к оплате: </p>
                                <p className={style.item__info_bold}>{s.price} рублей</p>
                            </div>
                            <div className={style.item__info_part}>
                                <p>Оплатить до: </p>
                                <p className={style.item__info_date}>{s.deadlinePayment}</p>
                            </div>
                        </div>
                    </ListItemButton>
                )
            })}
        </List>
    );
};

export default ConsultsPayList;

