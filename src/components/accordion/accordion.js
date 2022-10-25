<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import Paragraph from "../../atoms/paragraph/paragraph";

import "./accordion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, contentArr }) => {
  const [isActive, setIsActive] = useState(false);
  const [over, setOver] = useState(false);


  const experience = contentArr.map((c, idx) => {

    return (
      <div
      key={idx}
        className={`rzv-accordion-item__wrapper ${isActive ? "-expanded" : ""}`}
      >
        <div>     
          <div className="rzv-accordion-item__content">
            <div className="rzv-accordion-item__job">
              <div className="rzv-accordion-item__icon">
                <img src={c.icon} alt="" name="" />
              </div>

              <div className="rzv-accordion-item__content--info">
                <h3>{c.company}</h3>
                <Paragraph>{c.role}</Paragraph>
                <Paragraph size="small">{c.period}</Paragraph>
                <Paragraph color="lightgrey">{c.place}</Paragraph>
              </div>
            </div>
            
            <ul className="rzv-accordion-item__skills">
              {c.skills ? c.skills.map(skill => {
                return <li className="rzv-accordion-item__skill" key={skill}><p dangerouslySetInnerHTML={{__html: skill}}></p></li>
              }) : null}
            </ul>

          </div>
        </div>

        <div className="rzv-accordion-item__footer" >
          <p dangerouslySetInnerHTML={{__html: c.text}}></p>
        </div>
        
      </div>
    );
  });

  return (
    <li className="rzv-accordion-item">
      <h3
        className="rzv-accordion-item__title"
        onClick={() => setIsActive(!isActive)}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        <div>{title}</div>
        <div className="rzv-accordion-item__title--icon">
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
>>>>>>> parent of a52bb13 (massive update)
