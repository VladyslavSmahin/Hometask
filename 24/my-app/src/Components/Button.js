import React from "react";

class Button extends React.Component{
    render() {
       const {text} = this.props
        return (
            <div className="button">
                <button type="button" className="btn btn-light" id="lightButton">{text}</button>
            </div>
        );
    }
}
export default Button;