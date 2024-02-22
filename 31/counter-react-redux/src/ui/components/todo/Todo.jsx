import List from "./List.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";
import {Container, Typography, Box} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Header from "./Header.jsx";

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#243866',
            contrastText: '#fff',
        }
    },
});
function TodoForm() {

    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.primary.dark, marginBottom: '40px'}}>
                <Header/>
            </Box>
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
        </>
    );
}

export default TodoForm