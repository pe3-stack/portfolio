
import React, {useState, useEffect} from 'react';
import axios from '../../axios-server';


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
                
            </div>
        </div>
    );
}

export default Footer;
