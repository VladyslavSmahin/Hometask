import React from 'react';
import { createTheme } from '@mui/material/styles';

// Создаем светлую тему
export const darkTheme = createTheme({
    palette: {
        primary: {
            light: 'rgb(1,11,23)',
            main: 'rgb(174,198,232)',
            middle: 'rgb(101,126,161)',
            backHeader: 'rgb(51 65 85)',
            textButton: 'rgb(51 65 85)',
            backFooter: '#111827',
            contrastText: '#fff',
            buttonBackGr: 'rgb(203,201,182)',
            font: '#FEF9E7',
            linksColor: '#f3d280',
        }
    },
});

// Создаем темную тему
export const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#dfdfea',
            main: 'rgb(174,198,232)',
            middle: 'rgb(185,195,206)',
            backHeader: 'rgb(163,180,199)',
            backFooter: 'rgb(133,151,171)',
            contrastText: '#fff',
            textButton: 'rgb(51 65 85)',
            buttonBackGr: 'rgb(203,201,182)',
            fontYellow: '#FEF9E7',
            linksColor: '#040c1a',
        }
    },
});

const themes = {
    darkTheme,
    lightTheme,
};

// Создаем контекст
const ThemeContext = React.createContext(themes);

export default ThemeContext;