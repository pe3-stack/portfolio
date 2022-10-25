import React from "react";

/* atoms */
import Paragraph from "../../atoms/paragraph/paragraph";
import Icon from '../../atoms/icon/Icon';

/* scss */
import "./weather.scss";


const Weather = ({ city, icon, temp }) => {
    return (
        <div className='mp-weather-item'>
             <Icon name={icon} color="#FFFFFF" size={26} />
             <Paragraph color="light">{city}</Paragraph>
             <div className="mp-weather-item__temp">
                 <span>{temp}°</span>
             </div>
        </div>
    );
}

export default Weather;
