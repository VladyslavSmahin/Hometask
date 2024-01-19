import React from "react";

class Reset extends React.Component{
    render()
    {
        const {text, onClick} = this.props
        return (
            <button onClick={onClick} className='resetB'>{text}</button>
        )
    }
}
export default Reset