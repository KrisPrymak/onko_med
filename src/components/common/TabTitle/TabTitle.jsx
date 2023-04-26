import s from './TabTitle.module.css'

export const TabTitle = ({title})=> {
    return (
        <h1 className={s.title}>{title}</h1>
    )
}