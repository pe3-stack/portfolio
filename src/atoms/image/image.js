import React from "react";

import './image.scss'

const Image = ({src, width, height}) => {
    return (
    <div className="mp-a-image">
        <img src={src} width={width} height={height} alt=""/>
    </div>)
}


export default Image;