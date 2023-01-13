import React from "react";
import PropTypes from "prop-types";

/**
 * Component React to customize the Activity bar chart legend
 * @component
 */
const BarChartLegend = ({ payload }) => {
  return (
    <figcaption className="barChartActivity_figcaption">
      <h2>Activité quotidienne</h2>
      <ul className="barChartActivity_legend">
        {payload.map((entry, index) => (
          <li key={`itemLegend-${index}`}>
            {entry.dataKey === "kilogram" ? (
              <span className="iconLegend--kilogram"></span>
            ) : (
              <span className="iconLegend--calories"></span>
            )}
            {entry.value}
          </li>
        ))}
      </ul>
    </figcaption>
  );
};

BarChartLegend.propTypes = {
  /**
   * Recharts props value containing user's activity data used for the bar chart and internally formatted by Recharts
   */
  payload: PropTypes.array,
};

export default BarChartLegend;
