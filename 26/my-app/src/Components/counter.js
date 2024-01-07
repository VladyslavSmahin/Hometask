import React from "react";

class Counter extends React.Component{
    render() {
        const {id, value} = this.props

        return  <h2 id={id}>{value}</h2>
    }
}
export default Counter