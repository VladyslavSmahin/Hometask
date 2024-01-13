import React from "react";

function Counter (props){
    const {id, children} = props

return  <h2 id={id}>{children}  </h2>
}
export default Counter