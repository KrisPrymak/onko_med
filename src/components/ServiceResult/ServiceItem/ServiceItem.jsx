import s from './ServiceItem.module.css'
import {Button} from "@mui/material";
import {Icon} from "@iconify/react";
export const ServiceItem = ({title, date})=> {
    return (
        <div className={s.serviceItem}>
            <div>
                <h4 className={s.serviceItem__title}>{title}</h4>
                <h4 className={s.serviceItem__date}>{date}</h4>
            </div>
            <Button startIcon={<Icon icon="material-symbols:download"  />} variant={'contained'} sx={styleSX}>
                Скачать PDF
            </Button>
        </div>
    )
}
const styleSX = {
    height: '44px',
    width: '100%',
    textTransform: 'none',
    fontWeight: '700'
}