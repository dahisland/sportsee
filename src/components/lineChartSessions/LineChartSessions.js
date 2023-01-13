import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Legend,
} from "recharts";
import LineChartLegend from "./LineChartLegend";
import LineChartTooltip from "./LineChartTooltip";
import PropTypes from "prop-types";
import LineChartCursor from "./LineChartCursor";

/**
 * Component React for display the line chart showing sessions duration statistics of user
 * @component
 */
const LineChartSessions = ({ dataSessions }) => {
  /**
   * Value for the line chart ticks padding
   * @constant
   * @type {number}
   */
  const padding = 15;

  return (
    <figure className="lineChart_sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataSessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <Legend
            verticalAlign="top"
            iconSize={8}
            content={<LineChartLegend />}
          />
          <XAxis
            dataKey="dayLabel"
            type="category"
            padding={{ left: padding, right: padding }}
            axisLine={false}
            interval={"preserveStartEnd"}
            fontSize={12}
            tickLine={false}
            tick={{
              fill: "#FFFFFF",
              opacity: 0.5,
            }}
            textAnchor="middle"
          />
          <YAxis
            domain={["dataMin -10", "dataMax + 30"]}
            dataKey="sessionLength"
            hide={true}
          />
          <Tooltip
            content={<LineChartTooltip />}
            offset={12}
            wrapperStyle={{ outline: "none", top: "-40px" }}
            isAnimationActive={false}
            cursor={<LineChartCursor padding={padding} />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            unit={"min"}
            connectNulls={true}
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "#fff", strokeWidth: 8, strokeOpacity: 0.2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  );
};

LineChartSessions.propTypes = {
  /**
   * Array containing user sessions duration's data for each week's day
   */
  dataSessions: PropTypes.array,
};

export default LineChartSessions;
