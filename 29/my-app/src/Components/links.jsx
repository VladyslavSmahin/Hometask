import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {DarkThemeContext} from "../helpers/context.js";

function Link(props) {
    const {children, to, href} = props
    const currentTheme = useContext(DarkThemeContext)
    return href
    ?(
        <a
            href={href}
            className={currentTheme.colorLinks}>
            {children}
        </a>)

        :
        (
        <NavLink
            to={to}
            className={currentTheme.colorLinks}>
            {children}
        </NavLink>
    )
}

export default Link