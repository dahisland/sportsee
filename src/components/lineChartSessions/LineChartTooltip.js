import React from "react";
import PropTypes from "prop-types";

/**
 * Component React to customize the Sessions line chart tooltip displayed on hover
 * @component
 */
const LineChartTooltip = ({ payload }) => {
  if (payload[0] !== undefined) {
    return (
      <div>
        <p className="sessions_toolTip">{payload[0].value + " min"}</p>
      </div>
    );
  }
};

LineChartTooltip.propTypes = {
  /**
   * Recharts props value containing user's sessions data used for the line chart and internally formatted by Recharts
   */
  payload: PropTypes.array,
};

export default LineChartTooltip;
