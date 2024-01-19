import React from "react";
class PWinner extends React.Component{
    render(){
        const {text, className} = this.props
        return(
            <p className={className}>{text}</p>
        )
    }
}
export default PWinner