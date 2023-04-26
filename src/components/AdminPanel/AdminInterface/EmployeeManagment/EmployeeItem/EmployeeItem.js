import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeItem = ({item, handleClick}) => {

    const navigate = useNavigate()
    return (
        <ListItem style={{ backgroundColor: '#EFEFEF', marginTop: '20px', padding: 0, borderRadius: '5px'}}>
        <ListItemButton style={{padding: '13px 20px'}} onClick={() => navigate(`/admin/employeeItemPage/${item.id}`)}>
        <ListItemText primary={`${item.firstName} ${item.lastName}`} />
        <ListItemText primary={item.qualification} style={{textAlign: 'right'}}/>
    </ListItemButton>
        </ListItem>
    );
};

export default EmployeeItem;