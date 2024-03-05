import React, {useContext} from 'react';
import Links from "../components/Links.jsx";
import {Box, List} from "@mui/material";
import ThemeContext from "../components/helpers/theme.jsx";

const Footer = () => {
    const Theme = useContext(ThemeContext)
    return (
        <footer>
            <Box sx={{
                padding: '1% 3%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'auto',
                backgroundColor: `${Theme.palette.primary.backFooter}`,
                color: `${Theme.palette.primary.font}`
            }}>
                <Box >
                    <p>Phone number: +38 (093) 728 42 98</p>
                    <p>Email: vladislavsmagin1@gmail.com</p>
                    <p>Git: <Links children={"VladyslavSmahin"} href={'https://github.com/VladyslavSmahin'}/></p>
                    <p>&copy; 2024</p>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Links sx={{paddingBottom: '5px'}} children={"Home"} to='/'/>
                    <Links sx={{paddingBottom: '5px'}} children={"CV"} to='/CV'/>
                    <Links sx={{paddingBottom: '5px'}} children={"Todo"} to='/Todo'/>
                    <Links sx={{paddingBottom: '5px'}} children={"Counter"} to='/Counter'/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Links sx={{marginRight: '10px'}} href="https://www.instagram.com/vladismagin/" title='Instagram' target='_blank'>
                        <img src="/socials.svg" alt="Instagram" />
                    </Links>
                    <Links sx={{marginRight: '10px'}} href="#" title='Viber' target='_blank'>
                        <img src="/socials_1.svg" alt="Viber" />
                    </Links>
                    <Links href="#" title='Telegram' target='_blank'>
                        <img src="/socials_2.svg" alt="Telegram" />
                    </Links>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
