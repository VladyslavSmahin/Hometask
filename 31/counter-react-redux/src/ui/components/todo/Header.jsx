import {Box, Container, Typography} from "@mui/material";
import Button from "./Button.jsx";

function Header(props) {
    const {} = props
    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h2">Todo</Typography>
            <Box sx={{marginTop: '10px'}}>
                <Button>Home</Button>
                <Button sx={{marginLeft: '10px'}}>Info</Button>
            </Box>
        </Container>
    )

}

export default Header