import React, {useContext, useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import Main from "./Components/mainContent.jsx";
import {DarkThemeContext, LightThemeContext} from "./helpers/context.js";
import Projects from "./pages/Projects.jsx";
import ToDo from "./pages/ToDO.jsx";
import Gallery from "./pages/Gallery.jsx";

const App = () => {
    const darkTheme = useContext(DarkThemeContext);
    const LightTheme = useContext(LightThemeContext)
    const [currentTheme, setCurrentTheme] = useState(darkTheme)

    function handleChange() {
        setCurrentTheme(currentTheme === darkTheme ? LightTheme : darkTheme);
    }

    useEffect(() => {

    }, [currentTheme]);
    return (
        <DarkThemeContext.Provider value={currentTheme}>
            <BrowserRouter>
                <div className={`font-sans min-h-screen flex flex-col ${currentTheme.backgroundMain} `}>
                    <div className='text-center'>
                        <button className='text-xs text-center p-1'
                                onClick={handleChange}>{currentTheme.textButton}</button>
                    </div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Projects/>}/>
                        <Route path="/Resume" element={<Main className="container mx-auto mt-4 "></Main>}/>
                        <Route path='/ToDo' element={<ToDo/>}/>
                        <Route path='/Gallery' element={<Gallery/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </DarkThemeContext.Provider>


    );
};

export default App;
