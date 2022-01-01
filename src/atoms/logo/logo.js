import React from "react";

// import DrawerToggleButton from "../sideDrawer/DrawerToggleButton/DrawerToggleButton";

import "./logo.scss";

const Logo = ({children}) => {
  return (
    <div className="mp-logo">
      <p className="mp-logo__paragraph">{children}</p>
    </div>
  );
};

export default Logo;
