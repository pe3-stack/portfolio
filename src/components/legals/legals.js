import React from "react";

import Paragraph from "../../atoms/paragraph/paragraph";

import './legals.scss'

const Legals = ({ children }) => {
    return (
    <div className="rzv-legals">
        { children }
        
    </div>)
}


export default Legals;