import React from "react";

import "./info.scss";

const Info = ({ children }) => {

  return (
    <div className="rzv-info">
      <div className="rzv-info__wrapper">
        <div className="rzv-info__items">
            <div className="rzv-info-item">   
                <div className="rzv-info-item__text">{ children }</div>
            </div>      
        </div>
      </div> 
    </div>
    
  );
};

export default Info;
