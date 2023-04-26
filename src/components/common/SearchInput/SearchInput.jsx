import s from './SearchInput.module.css'
import {Icon} from "@iconify/react";
import {useState} from "react";

export const SearchInput = ({placeholder, buttonColor = '#2C60E3', onClick})=> {
    const [value, setValue] = useState('')

    const onInputChangeHandler = (e)=> {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        setValue('')
        onClick(value)
    }

    return (
        <div className={s.navigateInput}>
            <input
                className={s.input}
                type={'text'}
                placeholder={placeholder}
                value={value}
                onChange={onInputChangeHandler}
            />
           <button className={s.button} disabled={!value} onClick={onClickHandler} style={{backgroundColor: !value ? '#757575' : buttonColor}}>
               <Icon icon="material-symbols:search-rounded" /> Найти
           </button>
        </div>
    )
}