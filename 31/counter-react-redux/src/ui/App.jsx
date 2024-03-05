import React, {useContext, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../shared/store.js';
import Todo from './pages/Todo.jsx';
import Counter from './pages/Counter.jsx';
import Header from './components/todo/Header.jsx';
import {Box} from '@mui/material';
import ThemeContext, {darkTheme,lightTheme} from './components/helpers/theme.jsx';
import Button from "./components/todo/Button.jsx";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
    const [Theme, setTheme] = useState(darkTheme)
    const changeTheme = () => {
        setTheme(Theme === darkTheme ? lightTheme : darkTheme);
    };
    return (
        <BrowserRouter>
            <ThemeContext.Provider value={Theme}>
                <Box sx={{
                    backgroundColor: Theme.palette.primary.light,
                    color: Theme.palette.primary.font,
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Button sx={{height: '15px'}} onClick={changeTheme}>theme</Button>
                    <Box sx={{backgroundColor: Theme.palette.primary.backHeader, marginBottom: '40px'}}><Header/>
                    </Box>
                    <Box sx={{width:"100%"}}>
                        <Routes>
                            <Route path="/" element={<Provider store={store}><Home/></Provider>}/>
                            <Route path="/CV" element={<Provider store={store}><CV/></Provider>}/>
                            <Route path="/Todo" element={<Provider store={store}><Todo/></Provider>}/>
                            <Route path="/counter" element={<Provider store={store}><Counter/>
                            </Provider>}/>
                            <Route path="/Projects" element={<Provider store={store}><Projects/></Provider>}/>
                        </Routes>
                    </Box>
                </Box>
                <Footer/>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
};

export default App;
