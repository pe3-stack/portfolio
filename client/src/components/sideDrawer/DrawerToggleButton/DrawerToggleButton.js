import React from "react";
import "./DrawerToggleButton.scss";

const DrawerToggleButton = ({ toggleDrawer }) => (
    <a onClick={toggleDrawer} className='ca-toggle-button' href="#0">
        <div className='toggle_button__line'></div>
        <div className='toggle_button__line'></div>
        <div className='toggle_button__line'></div>
    </a>
);

export default DrawerToggleButton;
