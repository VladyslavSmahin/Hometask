import React from "react";

class Counter extends React.Component{
    render() {
        const {id, children} = this.props

        return  <h2 id={id}>{children}  </h2>
    }
}
export default Counter