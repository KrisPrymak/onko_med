import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import s from './UserInformation.module.css'

export const UserInformationInput = forwardRef((props , ref)  => {
  return (
    <input style={{color: 'black'}} className={!!props.error ? s.errorWrapper : s.correct}  {...props} ref={ref} />
  );
});