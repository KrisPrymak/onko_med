import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import {Pages} from "./components/Pages";
import {StylesProvider} from "@material-ui/styles";


function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#2c60e3",
            },
            error: {
                main: "#FF0000"
            },
            info: {
                main: "#757575"
            }
        },
        typography: {
            fontFamily: `"Tahoma", "Verdana", sans-serif`,
            fontWeightRegular: 400,
            fontWeightBold: 700,
            fontSize: 16,
            textTransform: "none",
        },
    });

    return (
        <StylesProvider  injectFirst>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <Pages />
                </div>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default App