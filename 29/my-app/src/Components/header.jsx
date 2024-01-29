import React, {useContext} from 'react';
import Link from "./links.jsx";
import {DarkThemeContext} from "../helpers/context.js";
const Header = () => {
    const currentTheme = useContext(DarkThemeContext)
    return (
        <header className={`${currentTheme.backgroundHeader} p-4 ${currentTheme.textColor}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">My Logo</div>
                <nav className="space-x-4 text-2xl text-white">
                    <Link children={"Home"} href='/'/>
                    <Link children={"Resume"} href='/Resume'/>
                    <Link children={"Services"} href='/Services'/>
                    <Link children={"Contact"} href='/Contact'/>
                </nav>
            </div>
        </header>
    );
};

export default Header;
