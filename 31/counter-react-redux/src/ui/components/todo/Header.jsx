import {Box, Container, Typography} from "@mui/material";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function Header(props) {
    const {} = props
    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h2">Todo</Typography>
            <Box sx={{marginTop: '10px'}}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button>Todo</Button>
                </Link>
                <Link to="/counter" style={{ textDecoration: 'none' }}>
                    <Button sx={{marginLeft: '10px'}}>Counter</Button>
                </Link>
            </Box>
        </Container>
    )

}

export default Header