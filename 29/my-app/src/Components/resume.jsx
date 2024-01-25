import React, {useContext} from 'react';
import Link from "./links.jsx";
import {DarkThemeContext} from "../helpers/context.js";
import CheckBox from './checkbox.jsx'

const Resume = () => {
    const currentTheme = useContext(DarkThemeContext)
    return (
        <section className={`flex section1 ${currentTheme.textResume}`} >
            <div className='flex leftCol flex-col'>
                <div className="w-full border-b mb-4 pb-4">
                    <h2 className={`${currentTheme.textGray200} text-3xl`}>Vladyslav Smahin</h2>
                    <p className='text-xl'>Junior Front End Developer</p>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>SUMMARY</h3>
                    <h4>Hello everyone, I'm a beginner developer, passionate about learning new
                        technologies, developing skills and I'm looking for a job in a company
                        where I can self-actualize myself. Responsible, punctual, self-organized,
                        also I have good communication and teamwork skills.
                    </h4>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>SKILLS</h3>
                    <ul className="grid grid-cols-3 gap-4 list-disc pl-5">
                        <li>HTML5</li>
                        <li>SCSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>GIT</li>
                        <li>Bootstrap</li>
                        <li>TailWind</li>
                        <li>Flexbox</li>
                        <li>Animation</li>
                    </ul>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>EDUCATION</h3>
                    <div>
                        <ul className="pl-5 list-disc">
                            <li>landscape/interior design (bachelor) at VB KNUKaA | 2018-2020</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>ADDITIONAL COURSES AND TRAININGS</h3>
                    <ul className="pl-5 list-disc">
                        <li>Front-end Basic at Hillel IT School <span className='ml-5 p-1 border'>excellent</span>
                            <br/>
                        <Link href='https://certificate.ithillel.ua/view/39070873' text='Certificate'></Link></li>

                        <li>Front-end Pro at Hillel IT School</li>
                    </ul>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>WORK EXPERIENCE</h3>
                    <ul className="grid grid-cols-2 gap-4 list-disc pl-5">
                        <li>Front End developer freelance</li>
                        <li>administrator at "РЕС" shop</li>
                    </ul>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>HOBBY</h3>
                    <p>Drawing, football, basketball, fishing, hiking, traveling, cooking, reading...</p>
                </div>
            </div >
            <div className='flex flex-col rightCol pl-2'>
                <div className="w-full border-b mb-4 pb-4">
                    <img src='/photo.jpg' alt='img'/>
                </div >
                <div className="w-full border-b mb-4 pb-4 flex flex-col">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>CONTACTS</h3>
                    <h5 className='pl-2 text-xs'>Location</h5>
                    <p>Kyiv, Ukraine</p>
                    <CheckBox className='pb-3'/>
                    <h5 className='pl-2 text-xs'>Email</h5>
                    <p className='pb-3'>vladislavsmagin1@gmail.com</p>
                    <h5 className='pl-2 text-xs'>Phone</h5>
                    <p className='pb-3'>+380937284298</p>
                    <Link className='pb-3' href='https://t.me/VladyslavSmagin' text={'Telegram'} />
                    <Link className='pb-3' href='https://www.linkedin.com/in/vladyslavsmahin/' text={'LinkedIn'} />
                    <Link className='pb-3' text={"GitHub"} href={'https://github.com/VladyslavSmahin'}/>
                </div>
                <div className="w-full border-b mb-4 pb-4">
                    <h3 className={`${currentTheme.textGray200} pl-2 pb-1`}>LANGUAGES</h3>
                    <ul className="pl-5 list-disc">
                        <li>Ukrainian C2</li>
                        <li>English B1</li>
                        <li>Russian C2</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;
