import {Box, Container} from "@mui/material";
import Button from "./Button.jsx";
import {Link} from "react-router-dom";
import { Dropdown } from '@mui/base/Dropdown';
import {useState} from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <p className="logo">Vladyslav Smahin</p>
            <Box sx={{marginTop: '10px', marginBottom: '20px'}}>
                <Link to="/" title='Home' style={{textDecoration: 'none'}}>
                    <Button sx={{marginRight: '10px'}}>Home</Button>
                </Link>
                <Link to="/CV" title='CV' style={{textDecoration: 'none'}}>
                    <Button sx={{marginRight: '10px'}}>CV</Button>
                </Link>
                <Link to="/Projects" title='Projects' style={{textDecoration: 'none'}}>
                    <Button sx={{marginRight: '10px'}}>Projects</Button>
                </Link>
            </Box>
        </Container>
    )

}

export default Header