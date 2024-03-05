import React, {useContext} from 'react';
import {Box, List, Typography} from "@mui/material";
import ThemeContext from "../components/helpers/theme.jsx";

const Home = () => {
    const Theme = useContext(ThemeContext)

    return (
        <Box className={'fonts'} sx={{textAlign: 'center'}}>

        </Box>
    );
};

export default Home;
