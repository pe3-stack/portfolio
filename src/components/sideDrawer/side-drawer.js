import React, { useState, useEffect } from "react";

import "./SideDrawer.scss";

import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

export default function SideDrawer({ clicked, show }) {


    return (
        <div className='c-sidedrawer c-sidedrawer__open'>
            <NavigationItems clicked={clicked} classs={show ? "__isMobile" : ""} />
        </div>
    );
}
