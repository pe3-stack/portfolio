import React from "react";

import './paragraph.scss'

const Paragraph = ({children, color, size}) => {
    return (
    <div className={`rzv-atm-paragraph rzv-atm-paragraph--${color} rzv-atm-paragraph--${size}`}>
        <p> {children} </p>
    </div>)
}


export default Paragraph;