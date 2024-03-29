import React, {useState, useRef} from "react";

import './button.scss'


const Button = ({href, children, type, form, submitForm, click, value, color, disabled}) => {


const rzvCta = useRef();


    return (
        <button
        disabled={disabled}
        className={`rzv-a-cta ${color ? `rzv-a-cta--${color}` : ''}`} 
        href={href ? href : null} target="_blank" rel="noreferrer"
        type={type}
        value={value}
        form={form}
        onSubmit={submitForm}
        onClick={click}
        ref={rzvCta}>{children}
        </button>
        
   )
}


export default Button;