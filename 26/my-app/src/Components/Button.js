import React from "react";

class Button extends React.Component {

    render() {
        const {text, onClick, pos } = this.props
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
}

export default Button;