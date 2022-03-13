import React from "react";

import './image.scss'

const Image = ({src, width, height, animate}) => {
    return (
    <div className={`rzv-image `}> 
    {/* ${animate ? '-animate' : ''} */}
        <img src={src} width={width} height={height} alt=""/>
    </div>)
}


export default Image;