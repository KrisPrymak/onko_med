import React from "react"

import s from './ServiceResult.module.css'
import {ServiceItem} from "./ServiceItem/ServiceItem";
import {FilterButton} from "./FilterButton/FilterButton";
import { TabTitle } from "../common/TabTitle/TabTitle";
import { SearchInput } from "../common/SearchInput/SearchInput";

export const ServiceResult = () => {
    const servicesItems = [
        {
            title: 'Прием (осмотр, консультация) врача-онколога первичный',
            date: '14.01.2023',
        },
        {
            title: 'Исследование уровня антигена аденогенных раков CA 72-4 в крови',
            date: '14.01.2023',
        },
        {
            title: 'Прием (осмотр, консультация) врача-онколога первичный',
            date: '14.01.2023',
        },
        {
            title: 'Исследование уровня антигена аденогенных раков CA 72-4 в крови',
            date: '14.01.2023',
        },
    ]

    return (
        <>
            <TabTitle title={'Результаты услуг'}/>
            <SearchInput placeholder={'Поиск результатов...'}/>
            <div className={s.serviceFilterOption}>
                <FilterButton text={'По названию'} filterValue={'name'}/>
                <FilterButton text={'По дате'} filterValue={'date'}/>
            </div>
            <div className={s.serviceItemsList}>
                {servicesItems.map((el, index) =>
                    <ServiceItem title={el.title} date={el.date} key={index}/>)}
            </div>
        </>
    )
}
