import React, { useState } from "react";
import Paragraph from "../../atoms/paragraph/paragraph";

import "./accordion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, contentArr }) => {
  const [isActive, setIsActive] = useState(true);
  const [over, setOver] = useState(false);

  const experience = contentArr.map((c) => {
    return (
      <div
        className={`mp-accordion-item__wrapper ${isActive ? "-expanded" : ""}`}
      >
        <div className="mp-accordion-item__content">
         
          <div className="mp-accordion-item__content">
            <div className="mp-accordion-item__job">
              <div className="mp-accordion-item__icon">
                <img src={c.icon} alt="" />
              </div>

              <div className="mp-accordion-item__content--info">
                <h3>{c.company}</h3>
                <Paragraph>{c.role}</Paragraph>
                <Paragraph size="small">{c.period}</Paragraph>
                <Paragraph color="lightgrey">{c.place}</Paragraph>
              </div>
            </div>
            
            <ul className="mp-accordion-item__content--skills">
              <li>HTML / CSS / SCSS</li>
            </ul>

          </div>
      
        </div>
      </div>
    );
  });

  return (
    <li className="mp-accordion-item">
      <h3
        className="mp-accordion-item__title"
        onClick={() => setIsActive(!isActive)}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        <div>{title}</div>
        <div className="mp-accordion-item__title--icon">
          <FontAwesomeIcon
            icon={isActive ? faChevronUp : faChevronDown}
            size="lg"
            color={over ? "black" : "lightgrey"}
          />
        </div>
      </h3>
      {experience}
    </li>
  );
};

export default Accordion;
