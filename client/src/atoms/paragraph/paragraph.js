import React from "react";

import './paragraph.scss'

const Paragraph = ({children, color, size}) => {
    return (
    <div className={`mp-a-paragraph mp-a-paragraph--${color} mp-a-paragraph--${size}`}>
        <p> {children} </p>
    </div>)
}


export default Paragraph;