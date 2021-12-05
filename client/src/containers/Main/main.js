import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./main.scss";

import Title from "../../atoms/title/title";
import Paragraph from "../../atoms/paragraph/paragraph";
import Image from "../../atoms/image/image";
import Button from "../../atoms/button/button";
import Info from "../../components/info/info";
import CanvasParticle from "../../atoms/canvas/canvas";

import Accordion from "../../components/accordion/accordion";

import { getExperience } from "../../redux/reducers/experienceSlice";

function Main() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  let accordion =
    experience.loading === "loaded" ? (
      experience.categories.map((i) => {
        return (
          <ul className="mp-accordion">
            <Accordion key={i._id} title={i.title} contentArr={i.data} />{" "}
          </ul>
        );
      })
    ) : (
      <div
        className={
          experience.error
            ? "mp-accordion-status mp-accordion-status--error-data"
            : "mp-accordion-status mp-accordion-status--loading-data"
        }
      >
        no data due to<br></br>{" "}
        <span>{experience.error ? experience.error : "loading..."}</span>
      </div>
    );

  return (
    <div className="mp-main">
      <div className="mp-main__wrapper">
      <CanvasParticle/>
        <div className="mp-main__left">
        
          <div className="mp-main__header">
            
          </div>

          <div className="mp-main__footer">
            
          </div>
          <ul>
            <li className="mp-main_item">
              <h2>Contact</h2>
              <p>pe3.gavrila@gmail.com</p>
              <a
                href="https://www.linkedin.com/in/razvan-gavrila-02780413b"
              >
                https://www.linkedin.com /in/<br/>
                razvan-gavrila-02780413b
              </a>
            </li>
            <li className="mp-main_item">
              <h2>Contact</h2>
              <p>pe3.gavrila@gmail.com</p>
            </li>
            <li><Button href="http://localhost:8080/files/1638627991282-icon-CV-Razvan-Gavrila.pdf">Download CV</Button></li>
          </ul>

          
        </div>

        <div className="mp-main__right">
          <div className="mp-main__header">
            <div className="mp-main__header_title">
              <Title>Razvan Gavrila</Title>
              <Paragraph color="lightgrey">Front End Developer</Paragraph>
            </div>
            <div className="mp-main__header_image">
              <Image src="https://via.placeholder.com/150" />
            </div>
          </div>
          <div className="mp-main__body">
            <Info />
            {accordion}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
