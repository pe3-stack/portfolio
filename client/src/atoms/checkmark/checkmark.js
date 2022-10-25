import React from "react";
//import PropTypes from 'prop-types';

import './_checkmark.scss';

const Checkmark = ({ isActive }) => (
  <div className="raz-checkmark-wr">
    { isActive ? <div className="raz-checkmark"></div> : null }
  </div>
);

// Checkmark.propTypes = {
//   name: PropTypes.string,
//   color: PropTypes.string,
//   size: PropTypes.number
// };

export default Checkmark;