import React from "react";

class Input extends React.Component {

    render() {
        const {text, placeholderText, disabled} = this.props
        return <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">{text}</span>
            <input type="text" id="userInput" className="form-control"disabled={disabled}
                   placeholder={placeholderText}/>
        </div>
    }
}

export default Input;