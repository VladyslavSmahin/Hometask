import React, {useContext} from 'react';
import {DarkThemeContext} from "../helpers/context.js";
import Resume from "../pages/resume.jsx";

const Main = () => {
    const currentTheme = useContext(DarkThemeContext)
    return (
        <main className="p-4 text-yellow-100 flex justify-center">
                <Resume/>
        </main>
    );
};

export default Main;
