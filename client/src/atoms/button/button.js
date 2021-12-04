import React from "react";

import './button.scss'

const Button = ({href, children}) => {
    return (
    <div>
        <a className="rgp-atm-button" href={href} target="_blank">{children}</a>
    </div>)
}


export default Button;