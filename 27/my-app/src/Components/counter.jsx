import React from "react";

function Counter (props) {
    const {id, value} = props

    return <h2 id={id}>  {value}</h2>;
}
export default Counter