import React from "react";

class Smile extends React.Component{
    render() {
        const {size, src, alt, clName, onClick, id} = this.props
        const imageStyle = {
            width: size.width,
            height: size.height
        };
        const handleClick = () => {
            onClick(id)
        }
        return  <img src={src} alt={alt} style={imageStyle} className={clName} onClick={handleClick}/>
    }
}
export default Smile