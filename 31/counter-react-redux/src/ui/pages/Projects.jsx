import React, {useContext} from 'react';
import {Box} from "@mui/material";
import ThemeContext from "../components/helpers/theme.jsx";
import {Link} from "react-router-dom";
import Button from "../components/todo/Button.jsx";

const Projects = () => {
    const Theme = useContext(ThemeContext)

    return (
        <Box className={'fonts'} sx={{textAlign: 'center'}}>
            <Link to="/Todo" title='Todo' style={{textDecoration: 'none'}}>
                <Button sx={{marginRight: '10px'}}>Todo</Button>
            </Link>
            <Link to="/counter" title='counter' style={{textDecoration: 'none'}}>
                <Button sx={{marginRight: '10px'}}>Counter</Button>
            </Link>
            <Link to="https://pavlovskaiasexolog.lovestoblog.com/?i=1" target="_blank" title="pavlovskaiasexolog" style={{textDecoration: 'none'}}>
                <Button>Lending</Button>
            </Link>
        </Box>
    );
};

export default Projects;
