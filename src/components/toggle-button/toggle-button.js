import Icon from "../../atoms/icon/Icon";

import "./toggle-button.scss";

const ToggleButton = ({ theme, toggle }) => {
  return (
    <div className="rzv-toggle-button">
      <div className="rzv-toggle-button__wrapper">

      <div className="rzv-toggle-button-icon rzv-toggle-button-icon__sun">
          <Icon name="01d" size={18} color={!theme.isBlack ?  '#5e5e5e' : '#ffe005'} />
        </div>
        

        <div className="rzv-toggle-button__button">
          <input type="checkbox" name="switch" id="switch" onClick={toggle} />
          <label htmlFor="switch"></label>
        </div>

        <div className="rzv-toggle-button-icon rzv-toggle-button-icon__moon">
          <Icon name="01n" size={18} color={theme.isBlack ? '#5e5e5e' : '#F4E8B5'}/>
        </div>

        
      </div>
    </div>
  );
};

export default ToggleButton;

// #ffe005
