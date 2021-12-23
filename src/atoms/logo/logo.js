import React from "react";

// import DrawerToggleButton from "../sideDrawer/DrawerToggleButton/DrawerToggleButton";

import "./logo.scss";

const Logo = ({children}) => {
  return (
    <a className="mp-logo" href="">
      <p className="mp-logo__paragraph">{children}</p>
    </a>
  );
};

export default Logo;
