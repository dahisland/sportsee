import React from "react";

/**
 * Component React for display a loader during data calls
 * @component
 */
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_container">
        <div className="loaderContainer_spinner">
          <div className="spinner_anim"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
