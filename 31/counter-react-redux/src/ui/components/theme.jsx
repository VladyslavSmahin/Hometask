import React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#243866',
            contrastText: '#fff',
        }
    },
});

const ThemeContext = React.createContext(theme);

export default ThemeContext;
