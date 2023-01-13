import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import RadialBarLegend from "./RadialBarLegend";
import PropTypes from "prop-types";
import RadialBarCircle from "./RadialBarCircle";

/**
 * Component React for display the radialBar chart score of user
 * @component
 */
const RadialBarScore = ({ dataScore }) => {
  return (
    <figure className="radialBar_score">
      <h2>Score</h2>
      <RadialBarCircle />
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="55%"
          outerRadius="75%"
          data={dataScore}
          startAngle={200}
          endAngle={-160}
          barCategoryGap={0}
          barSize={20}
        >
          <RadialBar
            minAngle={15}
            background={false}
            dataKey="value"
            cornerRadius={10}
          />

          <Legend
            iconSize={0}
            layout="horizontal"
            verticalAlign="middle"
            content={<RadialBarLegend todayScore={dataScore[1].value} />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </figure>
  );
};

RadialBarChart.propTypes = {
  /**
   * Array containing user's todayScore data
   */
  dataScore: PropTypes.array,
};

export default RadialBarScore;
