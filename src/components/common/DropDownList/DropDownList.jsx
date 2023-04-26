import { MenuItem, Select } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DropDownList = ({handleChange, first, second }) => {
    const stylesSX = {
        selectTypeConsult: {
          color: "#2C60E3",
          width: "287px",
        },
    }
    return (
        <Box sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
            <Select
              style={stylesSX.selectTypeConsult}
              defaultValue={first.value}
              onChange={handleChange}
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value={first.value} style={{color: '#2C60E3'}}>
                {first.text}
              </MenuItem>
              <MenuItem value={second.value} style={{color: '#2C60E3'}}>
              {second.text}
              </MenuItem>
            </Select>
          </Box>
    );
};

export default DropDownList;