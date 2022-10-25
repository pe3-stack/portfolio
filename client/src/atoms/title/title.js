import React from "react";

import './title.scss'

const Title = ({animate, children}) => {
    return (
    <div className={`mpa-title ${ animate ? '-animate' : '' }`}>
        <h1>
            {children}
        </h1>
    </div>)
}


export default Title;