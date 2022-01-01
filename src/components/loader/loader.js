import React from "react";

import "./loader.scss";

const Loader = () => {

  return (
    <div className="rzv-loader">
    <div className="rzv-loader-wr">
      <div className="rzv-loader--spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
  );
};

export default Loader;
