import React from "react";
<<<<<<< HEAD
import Logo from "../../atoms/logo/logo";
=======
import { Link  } from "react-router-dom";
import Logo from "../../atoms/logo/logo";
import Loader from "../../atoms/loader/loader"
>>>>>>> parent of a52bb13 (massive update)
import Weather from "../weather/weather";
import "./navbar.scss";

const Navbar = ({city, icon, temp}) => {
    return (
        <div className="mp-navbar">
            <div className="mp-navbar__wrapper">
<<<<<<< HEAD
                <Logo>Razvan</Logo>
                <div className="mp-weather">
                <div className="mp-weather__container">
                    <Weather city={city} icon={icon} temp={temp} />
=======
                <Link className="mp-logo__link" to="/market">
                    <Logo>Razvan</Logo>
                </Link>
                
                <div className="mp-weather">
                <div className="mp-weather__container">
                    {city ? <Weather city={city} icon={icon} temp={temp} /> : <Loader />}
>>>>>>> parent of a52bb13 (massive update)
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
