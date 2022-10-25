import PropTypes from 'prop-types';

import "./_card.scss";

const Card = ({ title, description, children }) => {
  return (
    <div className="rzv-card">
      <div className="rzv-card-title">
        <h3>{title}</h3>
        {description ? <h4>{description}</h4> : null}
      </div>

      <div className="rzv-card-body">{children}</div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.object,
};

export default Card;

// #ffe005
