import { useContext } from "react";
import ThemeContext from "./helpers/theme.jsx";
import { Link } from "@mui/material";

function Links(props) {
    const { children, href, sx, to } = props;
    const Theme = useContext(ThemeContext);

    return (
        <Link
            href={href || to} // Используем либо href, либо to в зависимости от типа ссылки
            to={to} // Внутренний маршрут
            sx={{ ...sx, color: Theme.palette.primary.linksColor, textDecoration: "none" }}
        >
            {children}
        </Link>
    );
}

export default Links;
