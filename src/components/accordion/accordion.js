import React, { useState } from "react";

import "./accordion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, contentArr }) => {
  const [isActive, setIsActive] = useState(true);
  const [over, setOver] = useState(false);

  const experience = contentArr ? contentArr.map((c) => {
    return (
      <div
        className={`mp-accordion-item__content ${isActive ? "-expanded" : ""}`}
      >
        <div className="mp-accordion-item__content--title">{c.company}</div>
        <div className="mp-accordion-item__content--paragraph">{c.role}</div>
        <div className="mp-accordion-item__content--paragraph">{c.period}</div>
        <div className="mp-accordion-item__content--text-small">{c.place}</div>
        <div className="mp-accordion-item__content--text">{c.text}</div>
      </div>)
  }) : null;

  return (
    <div className="mp-accordion-item">
      <div
        className="mp-accordion-item__title"
        onClick={() => setIsActive(!isActive)}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        <div>{title}</div>
        <div className="mp-accordion-item__title--icon" >
          <FontAwesomeIcon
            icon={isActive ? faChevronUp : faChevronDown}
            size="lg"
            color={over ? 'black' : 'lightgrey'}
          />
        </div>
      </div>
      { experience }
    </div>
  );
};

export default Accordion;
