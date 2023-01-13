import React from "react";
import PropTypes from "prop-types";

/**
 * Component React for display the legend in the middle of the radialBar chart score
 * @component
 */
const RadialBarLegend = ({ todayScore }) => {
  return (
    <figcaption className="radialBarScore_figcaption">
      <p>
        <span>{todayScore}%</span>
        <br />
        de votre objectif
      </p>
    </figcaption>
  );
};

RadialBarLegend.propTypes = {
  /**
   * Today's score progression of user in percentage
   */
  todayScore: PropTypes.number,
};

export default RadialBarLegend;
