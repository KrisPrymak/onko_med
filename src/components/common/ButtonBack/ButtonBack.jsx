import { Button } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ButtonBack = ({handleClick, mt, mb}) => {
  
    return (
        <Button
        variant="outlined"
        sx={{ textTransform: "None", mt: {mt}, mb: {mb} }}
        onClick={handleClick}
        startIcon={<KeyboardBackspaceIcon />}
      >
        Назад
      </Button>
    );
};

export default ButtonBack;