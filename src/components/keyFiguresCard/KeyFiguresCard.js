import React from "react";
import PropTypes from "prop-types";

/**
 * Component React for display the proteins, lipids, calories and carbohydrates cards informations
 * @component
 */
const KeyFiguresCard = ({ image, name, value }) => {
  return (
    <div className="keyFigures_card">
      <picture>
        <img src={"./img/" + image} alt={"icon " + name}></img>
      </picture>
      <div className="keyFiguresCard_data">
        <p className="keyFiguresCard_value">{value}</p>
        <p className="keyFiguresCard_type">{name}</p>
      </div>
    </div>
  );
};

KeyFiguresCard.propTypes = {
  /**
   * URL of icon image
   */
  image: PropTypes.string,
  /**
   * name of category
   */
  name: PropTypes.string,
  /**
   * User's value
   */
  value: PropTypes.string,
};

export default KeyFiguresCard;
