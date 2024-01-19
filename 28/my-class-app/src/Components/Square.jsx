import PropTypes from "prop-types";
import React from "react";


class Square extends React.Component  {
   render() {
       const { value, onClick,} = this.props
       return (
           <>
               <button onClick={onClick} className='square'>
                   {value}
               </button>
           </>
       )
   }
}
export default Square
