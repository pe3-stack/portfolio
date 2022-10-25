import React, { useState, useEffect } from "react";

import "./input-text.scss";

const Input = React.forwardRef(({ change, onKeyUp, val, label, type }, ref) => {

let [isAnimated, setIsAnimated] = useState(false);

useEffect(() => {
  if (ref.current.value) {
    console.log(ref.current)
    ref.current.previousElementSibling.classList.add("-animated");
  }
}, [ref, setIsAnimated])

const onAnimate = (e) => {
  if(!isAnimated) {
     e.target.previousElementSibling.classList.add("-animated");
     setIsAnimated(true);
  }
}


const onResetAnimate = (e) => {
    if(isAnimated && e.target.value === '') {
        e.target.previousElementSibling.classList.remove("-animated");
        setIsAnimated(false);
     }
} 


  return (
    <div className="rzv-input">
      <label className="rzv-input-label">{label}</label>
      <input
        className="rzv-input-text"
        type={type}
        value={val}
        name=""
        onFocus={(e) => onAnimate(e)}
        onBlur={(e) => onResetAnimate(e)}
        onChange={change}
        onKeyUp={onKeyUp}
        ref={ref}
      />
      {/* <div className="rzv-input--error">Please check your {label}</div> */}
    </div>
  );
});

export default Input;