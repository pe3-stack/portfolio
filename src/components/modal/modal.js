import React from "react";
import "./modal.scss";

const Modal = ({children}) => {
  return (
    <div className="rzv-modal">
      <div className="rzv-modal__overlay"></div>
      <div className="rzv-modal__wr">
          {children}
      </div>
    </div>
  );
};

export default Modal;
