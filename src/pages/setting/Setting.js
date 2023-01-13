import React from "react";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";

/**
 * Component React for display page Setting
 * @component
 */
const Setting = () => {
  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
    </div>
  );
};

export default Setting;
