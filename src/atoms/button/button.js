import React, {useState, useRef} from "react";

import './button.scss'


const Button = ({href, children, type, form, submitForm, click, value, color}) => {


const rzvCta = useRef();


    return (
        <button 
        className={`rzv-a-cta ${color ? `rzv-a-cta--${color}` : ''}`} 
        href={href} target="_blank" rel="noreferrer"
        type={type}
        value={value}
        form={form}
        onSubmit={submitForm}
        onClick={click}
        ref={rzvCta}>{children}</button>
   )
}


export default Button;