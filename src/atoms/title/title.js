import React from "react";

import './title.scss'

const Title = ({children}) => {
    return (
    <div className="mpa-title">
        <h1>
            {children}
        </h1>
    </div>)
}


export default Title;