import React, {useState} from "react";
import s from './FilterButton.module.css'
import {Icon} from "@iconify/react";

export const FilterButton = ({text, filterValue}) => {
    const [filter, setFilter] = useState(filterValue + 'Up')

    const onClickHandler = (filter) => {
        setFilter (filter === filterValue + 'Up' ? filterValue +'Down': filterValue +'Up')
    }
    return (
        <button className={s.filterButton} onClick={()=>onClickHandler(filter)}>
            <p>{text}</p>
            {filter === filterValue + 'Down'
                ? <Icon icon="material-symbols:keyboard-arrow-up-rounded" width={'30px'}/>
                : <Icon icon="material-symbols:keyboard-arrow-down-rounded" width={'30px'} />
            }

        </button>
    )
}