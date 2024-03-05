import React, {useContext} from 'react';
import {Box, List, Typography} from "@mui/material";
import ThemeContext from "../components/helpers/theme.jsx";

const Home = () => {
    const Theme = useContext(ThemeContext)

    return (
        <Box className={'fonts'} sx={{textAlign: 'center'}}>
            <p className='greeting1 greeting'>Hi everyone! My name is Vladyslav Smahin</p>
            <p className='greeting2 greeting'>Welcome to my own page.</p>
            <p className='greeting3 greeting'>Here you can find information you are interested in about me.</p>
        </Box>
    );
};

export default Home;
