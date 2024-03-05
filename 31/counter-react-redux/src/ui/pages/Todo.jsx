import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from "../components/helpers/theme.jsx";
import List from "../components/todo/List.jsx";
import Form from "../components/todo/Form.jsx";
import FooterTodo from "../components/todo/FooterTodo.jsx";
import { Container, Typography, Box } from "@mui/material";

function TodoForm() {
    const Theme = useContext(ThemeContext);

    return (
        <Container sx={{ backgroundColor: Theme.palette.primary.middle,
            width: '70%',
            margin: '0 auto',
            padding: '30px'
        }}>
            <Typography variant="h3" >Todo</Typography>
            <Form>Add item</Form>
            <List />
            <FooterTodo/>
        </Container>
    );
}

export default TodoForm;
