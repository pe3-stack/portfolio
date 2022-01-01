import React, {useState, useRef} from "react";

import './button.scss'


const Button = ({href, children, type, form, submitForm, value, dark}) => {

const [isDark] = useState(dark);

   
const rzvCta = useRef();
    return (
        <button 
        className={`rzv-a-cta ${isDark ? 'rzv-a-cta--dark' : ''}`} 
        href={href} target="_blank" rel="noreferrer"
        type={type}
        value={value}
        form={form}
        onSubmit={submitForm}
        ref={rzvCta}>{children}</button>
   )
}


export default Button;