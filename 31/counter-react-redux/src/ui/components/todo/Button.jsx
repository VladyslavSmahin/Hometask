import Button from '@mui/material/Button';
import ThemeContext from "../helpers/theme.jsx";
import {useContext} from "react";

export default function (props){
    const  {onClick, children,disabled, sx, type } = props
    const Theme = useContext(ThemeContext)
    return(
        <Button type={type}
                sx={{...sx, marginRight: '10px', backgroundColor: `${Theme.palette.primary.buttonBackGr}`, color: `${Theme.palette.primary.textButton}`}}
                variant="contained"
                disabled={disabled}
                onClick={onClick}
        >{children}</Button>
    )

}