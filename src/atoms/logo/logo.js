import React, { useEffect, useState } from "react";

// import DrawerToggleButton from "../sideDrawer/DrawerToggleButton/DrawerToggleButton";

import "./logo.scss";

const Logo = ({ children}) => {
  const [ logo, setLogo ] = useState([]);

  useEffect(() => {
      setLogo(children.split(""));
  }, [children]);

  return (
    <div className="mp-logo">
      <p className="mp-logo__paragraph">
        { logo.map((char, idx) => <span key={idx}>{char}</span>) }
      </p>
    </div>
  );
};

export default Logo;
