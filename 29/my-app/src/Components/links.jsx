import React from "react";
import {useContext} from "react";
import {DarkThemeContext} from "../helpers/context.js";

function Link (props) {
    const {children, href} = props
    const currentTheme = useContext(DarkThemeContext)
    return(
        <a href={href} className={currentTheme.colorLinks }>{children}</a>
    )
}
 export default Link