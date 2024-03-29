import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {Link} from 'react-router-dom'

import "./main.scss";

import Title from "../../atoms/title/title";
import Paragraph from "../../atoms/paragraph/paragraph";
import Image from "../../atoms/image/image";
import Button from "../../atoms/button/button";
import Info from "../../components/info/info";
import ProfileInfo from "../../components/profile-info/profile-info";

import CanvasParticle from "../../atoms/canvas/canvas";

import Accordion from "../../components/accordion/accordion";

import { getContact } from "../../redux/reducers/contactSlice";
import { getExperience } from "../../redux/reducers/experienceSlice";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "no data": "no data due to",
          Contact: "Contact",
        },
      },
      it: {
        translation: {
          "no data": "nessun dato",
          Contact: "Contatti",
        },
      },
    },
    lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

function Main() {
  const dispatch = useDispatch();

  let lang = document.querySelector("html").lang;
  
  // const [isMobile, setIsMobile] = useState(false);
  const contact = useSelector((state) => state.contact);
  const experience = useSelector((state) => state.experience);
  const { t } = useTranslation();

  const handleWindowResize = () => {
    // const resolution = window.innerWidth;
    // const isMobile = resolution >= 320 && resolution <= 768;
    // const isTablet = resolution >= 768 && resolution <= 1024;
    // const isDesktop = !isMobile && !isTablet;

    // setIsMobile(isMobile);
  };

  useEffect(() => {

    dispatch(getContact());
    dispatch(getExperience());
    handleWindowResize();

    window.onresize = () => {
      handleWindowResize();
    };
  }, [dispatch]);

  let accordion =
    experience.loading === "loaded" ? (
      experience.categories.map((i, idx) => {
        let accordion = i[lang].map((c, idx) => {
          return <Accordion key={idx} title={c.title} contentArr={c.data} />;
        });
        return <ul key={idx} className="rzv-accordion">{accordion}</ul>;
      })
    ) : (
      <div
        className={
          experience.error
            ? "rzv-accordion-status rzv-accordion-status--error-data"
            : "rzv-accordion-status rzv-accordion-status--loading-data"
        }
      >
        {t("no data")}
        <br></br>{" "}
        <span>{experience.error ? experience.error : "loading..."}</span>
      </div>
    );

  // contact - info
  let contact_info = contact.profiles.map((c, idx) => {
    return (
      <div key={idx} className="rzv-main__header">
        <div className="rzv-main__header_title">
          <Title>{c.profile.name}</Title>
          <Paragraph color="lightgrey">{c.profile.job}</Paragraph>
          <ProfileInfo />
         
           </div>
          
           <div className="rzv-main__header_image">
            <Image src={c.profile.image} />
          </div>
      </div>
    );
  });

  return (
    <div className="rzv-main">
      {/* {isMobile ? <FloatCTA /> : null} */}

      <div className="rzv-main__wrapper">
        <CanvasParticle />
        <div className="rzv-main__left">
          <ul>
            <li className="rzv-main_item">
              <h2>{t("Contact")}</h2>
              <p>pe3.gavrila@gmail.com</p>
              <a href="https://www.linkedin.com/in/razvan-gavrila-02780413b">
                https://www.linkedin.com /in/
                <br />
                razvan-gavrila-02780413b
              </a>
            </li>

            <li className="rzv-main_item">
            <a target="_blank" href="https://api.razvan-gavrila.com/files/1642082884903-icon-razvan-cv.pdf">
              <Button>Show CV</Button>
              </a>
            </li>
          </ul>
        </div>

        <div className="rzv-main__right">
          {contact_info}
          <div className="rzv-main__body">
            <Info />
            {accordion}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
