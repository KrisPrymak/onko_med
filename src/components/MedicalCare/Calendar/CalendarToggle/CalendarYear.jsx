import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowInputIcon from './ArrowInputIcon';



const CalendarYear = () => {
	return (
		<div>
    <FormControl  sx={{width: '114px'}} size="small">
        <Select sx={{height: '45px'}}
          // value={age}
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={ArrowInputIcon}
        >
          
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
		</div>
	)
}

export default CalendarYear;