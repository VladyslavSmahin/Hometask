import React from "react";
import {useContext} from "react";
import {DarkThemeContext} from "../helpers/context.js";

function Link (props) {
    const {text, href} = props
    const currentTheme = useContext(DarkThemeContext)
    return(
        <a href={href} target='_blank' className={currentTheme.colorLinks }>{text}</a>
    )
}
 export default Link