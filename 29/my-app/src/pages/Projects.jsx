import React, { useContext } from 'react';
import Link from "../Components/links.jsx";
import { DarkThemeContext } from "../helpers/context.js";

const Projects = () => {
    const currentTheme = useContext(DarkThemeContext);

    return (
        <section>
            <h2 className={`text-center pt-10 pb-10 text-5xl font-bold ${currentTheme.textColor}`}>My projects</h2>
            <div className='flex mx-auto w-3/5'>
                <div className=' grid grid-cols-2 leftCol gap-5'>
                        <Link href='https://github.com/VladyslavSmahin' >
                            <img className='' src='/images/photo.jpg' alt='img' title={'Git'}/>
                    </Link>
                    <Link href='https://github.com/VladyslavSmahin' >
                        <img className='' src='/images/photo.jpg' alt='img' title={'Git'}/>
                    </Link>
                    <Link href='https://github.com/VladyslavSmahin' >
                        <img className='' src='/images/photo.jpg' alt='img' title={'Git'}/>
                    </Link>
                    <Link href='https://github.com/VladyslavSmahin' >
                        <img className='' src='/images/photo.jpg' alt='img' title={'Git'}/>
                    </Link>
                </div>
                <div className='rightCol pr-5'>
                    <h2 className='text-center'>Что-то да будет тут...</h2>
                    <p className='text-center'>Что-то да будет тут...</p>
                    <p className='text-center'>Что-то да будет тут...</p>
                    <p className='text-center'>Что-то да будет тут...</p>
                    <p className='text-center'>Что-то да будет тут...</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
