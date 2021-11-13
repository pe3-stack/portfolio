import React from "react";

import './paragraph.scss'

const Paragraph = ({children, color}) => {
    return (
    <div className={`mp-a-paragraph mp-a-paragraph--${color}`}>
        <p> {children} </p>
    </div>)
}


export default Paragraph;