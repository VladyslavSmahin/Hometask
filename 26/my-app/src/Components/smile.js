import React from "react";

class Smile extends React.Component{
    render() {
        const {size, src, alt, clName, onClick} = this.props
        const imageStyle = {
            width: size.width,
            height: size.height
        };
        return  <img src={src} alt={alt} style={imageStyle} className={clName} onClick={onClick}/>
    }
}
export default Smile