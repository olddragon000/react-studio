import {createTheme} from "@mui/material";

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#DB7F67',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#310000',
            paper: 'white',
        },
    },
    typography: {
        fontFamily: 'Helvetica',
    },
    shape: {
        borderRadius: 16,
    },
})