import React, {useContext} from 'react';
import Link from "./links.jsx";
import {DarkThemeContext} from "../helpers/context.js";

const Footer = () => {
    const currentTheme = useContext(DarkThemeContext)
    return (
        <footer className={`${currentTheme.backgroundFooter} p-4 ${currentTheme.textColor} mt-auto`}>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p>Phone number: +38 (093) 728 42 98</p>
                    <p>Email: vladislavsmagin1@gmail.com</p>
                    <p>Git:  <Link children={"VladyslavSmahin"} href={'https://github.com/VladyslavSmahin'}/></p>
                    <p>&copy; 2024</p>
                </div>
                <div className="mx-auto flex items-center">
                    <nav className="text-xl flex-col flex text-white">
                        <Link children={"Home"} to='/'/>
                        <Link children={"Resume"} to='/Resume'/>
                        <Link children={"Painting gallery"} to='/Gallery'/>
                        <Link children={"To Do"} to='/ToDo'/>
                    </nav>
                </div>
                <div className="flex items-center">
                    <a href="https://www.instagram.com/vladismagin/" className="mr-4 hover:text-gray-200 " title='Instagram' target='_blank'>
                        <img src="/socials.svg" alt="Instagram" className="h-10 w-10" />
                    </a>
                    <a href="#" className="mr-4 hover:text-gray-200" title='Viber' target='_blank'>
                        <img src="/socials_1.svg" alt="Viber" className="h-10 w-10" />
                    </a>
                    <a href="#" className="hover:text-gray-200" title='Telegram' target='_blank'>
                        <img src="/socials_2.svg" alt="Telegram" className="h-10 w-10"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
