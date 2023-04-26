import { FormControl, Select } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './SelectInput.module.css';

const SelectInput = ({text}) => {
    return (
        <FormControl
                sx={{ height: "44px", mb: '15px'}}
              >
                <span className={style.popup__select_title}>{text}</span>
                <Select
                  displayEmpty
                  IconComponent={ExpandMoreIcon}
                  variant='outlined'
                >
                </Select>
              </FormControl>
    );
};

export default SelectInput;