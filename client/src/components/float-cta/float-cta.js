import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./float-cta.scss";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const FloatCTA = () => {
  let [isVisible, setIsVisible] = useState(true);
  let [coords, setCoords] = useState({});

  
  useEffect(() => {
    window.onscroll = () => {
      floating();
    };
  }, []);
 
  const floating = () => {  
    console.log();
    let heightToHideFrom = 450;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;



    if (winScroll >= heightToHideFrom) { 
       isVisible &&      // to limit setting state only the first time         
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };



  return (
    <div
      className={`rzv-float-cta ${isVisible ? "-show" : ""} `}
    >
      <div className="rzv-float-cta__wrapper">
        <div className="rzv-float-cta__icon">
          <FontAwesomeIcon icon={faDownload} size="lg" color="lightgrey" />
        </div>
        <div className="rzv-float-cta__text">CV</div>
      </div>
    </div>
  );
};

export default FloatCTA;
