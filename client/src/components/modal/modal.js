import React from "react";
import "./modal.scss";

const Modal = ({ children, status }) => {

  const handleClose = (e) => {
    e.preventDefault();
    
    // e.target.parentNode.classList.remove('-opened');
  }

  return (
    <div className={`rzv-modal ${!status ? '-opened' : ''}`} js-auth-modal="">
      <div className="rzv-modal__overlay" onClick={handleClose}></div>
      <div className="rzv-modal__wr">
          {children}
      </div>
    </div>
  );
};

export default Modal;
