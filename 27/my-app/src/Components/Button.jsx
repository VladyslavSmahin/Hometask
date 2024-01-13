import React from "react";

function Button (props) {
    const {text, onClick, pos } = props
    const posButton = {
        display: 'flex',
        justifyContent: pos
    }
    return (
        <div className="button" style={posButton}>
            <button type="button"
                    className="btn btn-light"
                    onClick={onClick}
            >{text}</button>
        </div>
    );
}

export default Button;