import { Button } from '@mui/material';
import React from 'react';
import style from './BlueButton.module.css';

const BlueButton = ({text, width, handleClick, disabled = false, height = 'auto'}) => {
    return (
        <div className={style.button}>
          <Button
            sx={{
              fontFamily: `"Tahoma", "Verdana", sans-serif`,
              textTransform: "none",
              fontWeight: "700",
              fontSize: '16px',
              lineHeight: '1.19',
              backgroundColor: '#2C60E3',
              width: {width},
              boxShadow: '0px 4px 20px 1px rgba(44, 96, 227, 0.25)',
              padding: '15px',
              height: {height},
            }}
            variant="contained"
            onClick={handleClick}
            disabled={disabled}
          >
            {text}
          </Button>
        </div>
    );
};

export default BlueButton;