import React from "react";

/**
 * Component React for display a white circle containing legend of the radialBar score
 * @component
 */
const RadialBarCircle = () => {
  return (
    <svg width="100%" height="100%" className="radialBarScore_circle">
      <circle cx="50%" cy="50%" r="28%" fill="white" />
    </svg>
  );
};

export default RadialBarCircle;
