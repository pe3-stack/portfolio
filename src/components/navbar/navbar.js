import React from "react";
import Logo from "../../atoms/logo/logo";
import Weather from "../weather/weather";
import "./navbar.scss";

const Navbar = ({city, icon, temp}) => {
    return (
        <div className="mp-navbar">
            <div className="mp-navbar__wrapper">
                <Logo>Razvan</Logo>
                <div className="mp-weather">
                <div className="mp-weather__container">
                    <Weather city={city} icon={icon} temp={temp} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
