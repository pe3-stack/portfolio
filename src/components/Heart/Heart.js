import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "./Heart.scss";

const Heart = () => {

  return (
    <div className="heart-icon"><FontAwesomeIcon className="rzv-love-icon" icon={faHeart} /></div>
  );
};

export default Heart;
