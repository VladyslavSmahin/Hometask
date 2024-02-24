import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from "../shared/store.js";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Todo from "./components/todo/Todo.jsx";
import Wrapper from "./components/counter/Wrapper.jsx";
import Header from "./components/todo/Header.jsx";
import { Box } from "@mui/material";
import ThemeContext, { theme } from "./components/theme.jsx"

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Provider store={store}>
                    <Box sx={{ backgroundColor: theme.palette.primary.dark, marginBottom: '40px'}}>
                        <Header/>
                    </Box>
                    <Todo/>
                </Provider>
            ),
        },
        {
            path: '/counter',
            element: (
                <Provider store={store}>
                    <Box sx={{ backgroundColor: theme.palette.primary.dark, marginBottom: '40px'}}>
                        <Header/>
                    </Box>
                    <Wrapper/>
                </Provider>
            ),
        },
    ]);

    return (
        <ThemeContext.Provider value={theme}>
            <RouterProvider router={router} />
        </ThemeContext.Provider>
    );
};

export default App;
