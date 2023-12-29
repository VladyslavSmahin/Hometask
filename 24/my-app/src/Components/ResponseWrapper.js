import React from "react";

class ResponseWrapper extends React.Component{
    render() {
        const {text} = this.props
        return <div id="responseWrapper">
            <div id="headerBlock">
                <span id="Controller"></span>
                <span id="ID"></span>
            </div>
            <pre id="response">{text}</pre>
        </div>
    }
}
export default ResponseWrapper;