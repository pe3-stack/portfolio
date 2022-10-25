import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./main.scss";

import { getContact } from "../../redux/reducers/contactSlice";
import { getExperience } from "../../redux/reducers/experienceSlice";

import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import Card from "../../components/Card/Card";

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

 // let lang = document.querySelector("html").lang;
  
  // const [isMobile, setIsMobile] = useState(false);
  const profile = useSelector((state) => state.contact.profile);
  const handleWindowResize = () => {
  };

  useEffect(() => {
    dispatch(getContact());
    dispatch(getExperience());
    handleWindowResize();

    window.onresize = () => {
      handleWindowResize();
    };
  }, [dispatch]);

  return (
    <div className="rzv-main">
        <Card title={ profile.name } description={ profile.job }>
          <div><img src={`${process.env.REACT_APP_API_KEY}/files/1662241785022-icon-me photo.png`} alt=""/></div>
          <div><p>Developing web applications with great passion and enthusiasm :)</p></div>
          <ul>
            <li><a href='https://wa.link/1ub5s9'><img src={`${process.env.REACT_APP_API_KEY}/files/1662244221728-icon-whatsapp.png`} alt=''/></a></li>
            <li><a href='https://www.linkedin.com/in/razvan-gavrila-02780413b/'><img src={`${process.env.REACT_APP_API_KEY}/files/1662245119195-icon-linkedin.png`} alt=''/></a></li>
            <li><a href='/' mailto="mailto:razvan.pe3@gmail.com"><img src={`${process.env.REACT_APP_API_KEY}/files/1662247317856-icon-gmail.png`} alt=''/></a></li>
          </ul>
        </Card>

     </div>

  );
}

export default Main;
