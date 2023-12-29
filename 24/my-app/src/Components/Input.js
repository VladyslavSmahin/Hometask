import React from "react";

class Input extends React.Component {
    render() {
        const {text} = this.props
        const { placeholderText } = this.props;
        return <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">{text}</span>
            <input type="text" id="userInput" className="form-control" placeholder={ placeholderText }/>
        </div>
    }
}

export default Input;