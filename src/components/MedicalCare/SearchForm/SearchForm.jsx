import {createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider,} from "@mui/material";
import React, {useState} from "react";
import style from "./SearchForm.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SearchInput} from "../../common/SearchInput/SearchInput";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#757575",
      primary: "#A3A3A3",
    },
  },
  typography: {
    fontFamily: `"Tahoma", "Verdana", sans-serif`,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16,
    textTransform: "none",
  },
});

const SearchForm = ({setFetchFilter, searchMedicalCares, handleSearch}) => {
    const [selectedPaid, setSelectedPaid] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(false);
    const medicalCares = useSelector(state => state.medicalCare.medicalCare)

    const onPaidChange = (event) => {
      setFetchFilter(event.target.value)
      setSelectedPaid(event.target.value)
    }
  return (
    <ThemeProvider theme={theme}>
      <form className={style.searchForm} onSubmit={(e) => {e.preventDefault()}}>
          <SearchInput placeholder={"Поиск услуги..."} onClick={searchMedicalCares}/>
        <div className={style.searchForm__controls}>
          <FormControl sx={{ width: "154px"}}>
            <InputLabel sx={{textAlign: 'center'}} id="paid">Платно/ОМС</InputLabel>
            <Select
            IconComponent={ExpandMoreIcon}
              labelId="paid-label"
              id="paid"
              label="Платно/ОМС"
              onChange={onPaidChange}
            >
              <MenuItem value={"oms=false"}>Платно</MenuItem>
              <MenuItem value={"oms=true"}>ОМС</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: {xs: '154px', md: "255px"}, height: "44px" }}>
            <InputLabel id="doctor-label">Врач</InputLabel>
            <Select
             disabled={!selectedPaid}
            IconComponent={ExpandMoreIcon}
              labelId="doctor-label"
              id="doctor"
              label="doctor"
            >
              {medicalCares.map(a => <MenuItem value={a.doctor}>{a.doctor}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ width: {xs: '343px', md: "255px"}, height: "44px", mt: {xs: '10px', md: '0'}, mb: {xs: '10px'} }}>
            <InputLabel id="demo-simple-select-label">Отделение</InputLabel>
            <Select
            disabled={!selectedDoctor}
            IconComponent={ExpandMoreIcon}
              labelId="departament-label"
              id="departament"
              label="departamentС"
            ></Select>
          </FormControl>
        </div>
        {selectedPaid === 'oms=true' && 
        <div className={style.searchForm__oms}>Для посещение услуг <span className={style.bold}>ОМС</span> Вам требуется <span className={style.bold}>направление</span>.</div>}
        {medicalCares.length === 0 && <div className={style.searchForm__help}>
        Для поиска услуги введите название или используйте фильтрацию.
      </div>}
      </form>
    </ThemeProvider>
  );
};

export default SearchForm;
