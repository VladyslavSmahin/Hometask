import React from "react";

class Button extends React.Component {

    render() {
        const {text, onClick } = this.props
        return (
            <div className="button">
                <button type="button"
                        className="btn btn-light"
                        id="lightButton"
                        onClick={onClick}
                >{text}</button>
            </div>
        );
    }
}

export default Button;