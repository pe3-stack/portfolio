import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../atoms/logo/logo";
import ToggleButton from "../toggle-button/toggle-button";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from '../../redux/reducers/theme/themeSlice'

import "./navbar.scss";

const Navbar = ({ city, icon, temp }) => {
  const theme = useSelector((state) => state.theme);
  const [ , setStyle ] = useState({});

  const dispatch = useDispatch();

  const toggleT = (e) => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    setStyle(theme.style);
  }, [theme.style]);

  return (
    <div className="mp-navbar" >
      <div className="mp-navbar__wrapper">
        <Link className="mp-logo__link" to="/market">
          <Logo>R</Logo>
        </Link>
       
       <div className="mp-navbar__right_wr">
        <ToggleButton toggle={(() => toggleT())} theme={theme}/>
       </div>
        {/* <div className="mp-weather">
          <div className="mp-weather__container">
            {city ? (
              <Weather city={city} icon={icon} temp={temp} />
            ) : (
              <Loader />
            )}

            <input
              type="checkbox"
              name="switch"
              id="switch"
              onClick={(e) => toggleTheme(e)}
            />
            <label htmlFor="switch"></label>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default Navbar;
