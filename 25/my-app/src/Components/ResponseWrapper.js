import React from "react";

class ResponseWrapper extends React.Component{

    render() {

        const {text, backgroundColor} = this.props
        const divStyle = {
            backgroundColor: backgroundColor
        };
        return <div id="responseWrapper" >
            <div id="headerBlock">
                <span id="Controller"></span>
                <span id="ID"></span>
            </div>
            <pre id="response" style={divStyle}>{text}</pre>
        </div>
    }
}
export default ResponseWrapper;