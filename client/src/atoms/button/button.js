
import React, {useRef} from "react";

import './button.scss'


const Button = ({href, children}) => {

   
const rzvCta = useRef();
   
    return (
        <a className="rzv-a-cta" href={href} target="_blank" rel="noreferrer" ref={rzvCta}>{children}</a>
   )
}

export default Button;