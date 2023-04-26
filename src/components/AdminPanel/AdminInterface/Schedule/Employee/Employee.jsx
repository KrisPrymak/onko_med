import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const Employee = props => {
	return (
		<>
			<ListItem
            component="div"
            disablePadding
            sx={{
              backgroundColor: "#EFEFEF",
              marginBottom: "10px",
              borderRadius: "5px",
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <ListItemButton sx={{
                '&:hover, &:focus': {
                    backgroundColor: "#FFFFFF",
                    border: '1px solid #244EB8',
                    borderRadius: '5px',
                    color: '#244EB8'
                  }
            }}>
              <ListItemText primary='Иванова Василиса Григорьевна' sx={{maxWidth: {xs: '200px', md: '566px'} }}/>
              <ListItemText primary='Врач-онколог' sx={{textAlign: 'end'}}/>
            </ListItemButton>
          </ListItem>
		</>
	)
}

export default Employee 