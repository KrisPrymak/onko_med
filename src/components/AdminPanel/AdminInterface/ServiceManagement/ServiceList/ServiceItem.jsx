import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const ServiceItem = props => {
	const data = {
		text: 'Планирование и моделирование лучевой терапии с использованием виртуальной трехмерной модели тела',
		cost: '6640 рублей'
	}
	
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
              <ListItemText primary={data.text} sx={{maxWidth: {xs: '200px', md: '566px'} }}/>
              <ListItemText primary={data.cost} sx={{textAlign: 'end'}}/>
            </ListItemButton>
          </ListItem>
		</>
	)
}

export default ServiceItem