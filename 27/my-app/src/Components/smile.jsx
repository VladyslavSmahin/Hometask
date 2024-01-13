import React from "react";

function Smile (props){
    const {size, src, alt, clName, onClick, id} = props
    const imageStyle = {
        width: size.width,
        height: size.height
    };
    const handleClick = () => {
        onClick(id)
    }
    return  <img src={src} alt={alt} style={imageStyle} className={clName} onClick={handleClick}/>

}
export default Smile