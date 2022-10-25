
import React, {useState, useEffect} from 'react';
import axios from '../../axios-server';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


import './Footer.scss';

const Footer = () => {

    let [info, setInfo] = useState(null);

    useEffect(() => {
        fetchContact();
      }, []);
    
      const fetchContact = () => {
        axios.get("contact.json")
          .then((res) => {
            setInfo(res.data);
          })
          .catch((error) => {
          });
      }

      console.log(info);

    return (
        <div className="c-footer">
            <div className="c-footer__wrapper">

                <ul className="c-footer__left">
                    <li className="c-footer__left__item">


                        <div className="c-footer__left__item -icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="c-footer__left__item -body">
                            <div className="c-footer__left__item -body-title">
                                <h2>+{info.phone}</h2>
                            </div>
                            <div className="c-footer__left__item -body-description">
                                <p>Description</p>
                            </div>
                        </div>


                    </li>
                    <li className="c-footer__left__item">


                        <div className="c-footer__left__item -icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="c-footer__left__item -body">
                            <div className="c-footer__left__item -body-title">
                                <h2>Title</h2>
                            </div>
                            <div className="c-footer__left__item -body-description">
                                <p>Description</p>
                            </div>
                        </div>


                    </li>


                </ul>




                <div className="c-footer__right">
                    <div className="c-footer__right-icon">
                        <img src="https://source.unsplash.com/random" />
                    </div>
                    <div className="c-footer__right_body">
                        <div className="c-footer__right-title">
                            <h2>Title</h2>
                        </div>
                        <div className="c-footer__right-description">
                            <p>Description</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
