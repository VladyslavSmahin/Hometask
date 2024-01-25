import React, {useContext, useState, useEffect} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from "./Components/mainContent.jsx";
import {DarkThemeContext, LightThemeContext} from "./helpers/context.js";
import Resume from "./Components/resume.jsx";


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
            <div className={`font-sans min-h-screen flex flex-col ${currentTheme.backgroundMain} `}>
                <div className='text-center'>
                    <button className='text-xs text-center p-1'
                            onClick={handleChange}>{currentTheme.textButton}</button>
                </div>
                <Header/>
                <Main className="container mx-auto mt-4 ">
                </Main>
                <Footer/>
            </div>
        </DarkThemeContext.Provider>


    );
};

export default App;
