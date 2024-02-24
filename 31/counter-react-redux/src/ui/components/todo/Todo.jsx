import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from "../theme.jsx";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";
import { Container, Typography, Box } from "@mui/material";

function TodoForm() {
    const theme = useContext(ThemeContext);

    return (
        <Container sx={{ backgroundColor: theme.palette.primary.light,
            width: '70%',
            margin: '0 auto',
            padding: '20px'
        }}>
            <Typography variant="h3" >Todo</Typography>
            <Form>Add item</Form>
            <List />
            <Footer/>
        </Container>
    );
}

export default TodoForm;
