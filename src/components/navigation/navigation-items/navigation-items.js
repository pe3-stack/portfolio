import React from "react";

import "./navigation-items.scss";

import NavigationItem from "./navigation-item/navigation-item";


const navigationItems = ({ clicked, isMobile, classs }) => {
  return (
    <div className={`c-navigation ${isMobile ? classs : ""}`}>
      <ul className='c-navigation__items'>
        <NavigationItem clicked={clicked} link="/">Gratare</NavigationItem>
      </ul>
    </div >

  );
};


export default navigationItems