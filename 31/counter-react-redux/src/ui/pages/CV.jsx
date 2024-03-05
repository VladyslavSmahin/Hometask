import React from 'react';
import Link from "../Components/links.jsx";
import {Checkbox, Box} from "@mui/material";

const CV = () => {
    return (
        <Box sx={{}} className={`section1`}>
            <Box className={"leftCol"}>
                <div>
                    <h2 className={'headers'}>Vladyslav Smahin</h2>
                    <p>Junior Front End Developer</p>
                </div>
                <div>
                    <h3 className={'headers'}>SUMMARY</h3>
                    <h4 className={"borders"}>Hello everyone, I'm a beginner developer, passionate about learning new
                        technologies, developing skills and I'm looking for a job in a company
                        where I can self-actualize myself. Responsible, punctual, self-organized,
                        also I have good communication and teamwork skills.
                    </h4>
                </div>
                <div>
                    <h3 className={'headers'}>SKILLS</h3>
                    <ul className={"borders, skills"}>
                        <li>HTML5</li>
                        <li>SCSS</li>
                        <li>GitHub</li>
                        <li>Bootstrap</li>
                        <li>TailWind</li>
                        <li>TailwindCSS</li>
                        <li>MUI</li>
                        <li>FlexBox</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Redux-sags</li>
                        <li>Node.js(10hours)</li>
                        <li>MongoDB(10hours)</li>
                        <li>Express(10hours)</li>
                    </ul>
                </div>
                <div>
                <h3 className={'headers'}>EDUCATION</h3>
                    <div className={"borders"}>
                        <ul>
                            <li>landscape/interior design (bachelor) at VB KNUKaA | 2018-2020</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={'headers'}>ADDITIONAL COURSES AND TRAININGS</h3>
                    <ul className={"borders"}>
                        <li>Front-end Basic at Hillel IT School <span>excellent</span>
                            <br/>
                            <Link href='https://certificate.ithillel.ua/view/39070873' text='Certificate'></Link></li>

                        <li>Front-end Pro at Hillel IT School</li>
                    </ul>
                </div>
                <div>
                    <h3 className={'headers'}>WORK EXPERIENCE</h3>
                    <ul className={"borders"}>
                        <li>Front End developer freelance</li>
                        <li>administrator at "РЕС" shop</li>
                    </ul>
                </div>
                <div className={"borders"}>
                    <h3 className={'headers'}>HOBBY</h3>
                    <p>Drawing, football, basketball, fishing, hiking, traveling, cooking, reading...</p>
                </div>
            </Box>
            <Box>
                <Box className={'zoom-container'}>
                    <img src='/myphoto.jpg' className={'zoomable-image'} style={{ width: '300px' }} alt='img'/>
                </Box>
                <div>
                    <h3 className={'headers'}>CONTACTS</h3>
                    <h5>Location</h5>
                    <p>Kyiv, Ukraine</p>
                    <h5>Email</h5>
                    <p>vladislavsmagin1@gmail.com</p>
                    <h5>Phone</h5>
                    <p>+380937284298</p>
                    <Link href='https://t.me/VladyslavSmagin' children={'Telegram'}/>
                    <br/>
                    <Link href='https://www.linkedin.com/in/vladyslavsmahin/' children={'LinkedIn'}/>
                    <br/>
                    <Link children={"GitHub"} href={'https://github.com/VladyslavSmahin'}/>
                </div>
                <div>
                    <h3 className={'headers'}>LANGUAGES</h3>
                    <ul>
                        <li>Ukrainian C2</li>
                        <li>English B1</li>
                        <li>Russian C2</li>
                    </ul>
                </div>
            </Box>
        </Box>
    );
};

export default CV;
