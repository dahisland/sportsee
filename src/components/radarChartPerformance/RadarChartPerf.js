import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Component React for display the radar chart showing performances statistics of user
 * @component
 */
const RadarChartPerf = ({ dataPerf }) => {
  return (
    <figure className="radarChart_perf">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          innerRadius="6%"
          outerRadius="49%"
          data={dataPerf}
          startAngle={-150}
          endAngle={210}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            tickLine={false}
            tickSize={13}
            dy={3}
            tick={{
              fill: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "500",
            }}
            dataKey="subject"
          />
          <PolarRadiusAxis axisLine={false} tickCount={5} tick={false} />
          <Radar dataKey="value" fill="#FF0101B2" />
        </RadarChart>
      </ResponsiveContainer>
    </figure>
  );
};

RadarChartPerf.propTypes = {
  /**
   * Array containing objects with data values and french labels of each perfomance's category
   */
  dataPerf: PropTypes.array,
};

export default RadarChartPerf;
