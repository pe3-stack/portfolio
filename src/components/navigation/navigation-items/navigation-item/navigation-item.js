import React from "react";
import { Link } from "react-router-dom";

import "./navigation-item.scss";

const navigationItem = ({ link, clicked, children }) => {
  return (
    <li onClick={clicked} className='c-navigation__item'>
      <Link to={link}>
        {children}
      </Link>
    </li >
  );
};

export default navigationItem;
