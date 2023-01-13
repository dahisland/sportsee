import React from "react";
import yogaIcon from "../../assets/icon-yoga.svg";
import swimIcon from "../../assets/icon-swim.svg";
import rideIcon from "../../assets/icon-ride.svg";
import muscuIcon from "../../assets/icon-muscu.svg";

/**
 * Component React for display vertical navigation bar with icons and copyright
 * @component
 */
const VerticalNav = () => {
  /**
   * Array containing objects with icons names and their image's url
   * @constant
   * @type {array}
   */
  const iconCategories = [
    { name: "yoga", image: yogaIcon },
    { name: "swim", image: swimIcon },
    { name: "ride", image: rideIcon },
    { name: "swim", image: muscuIcon },
  ];
  return (
    <nav className="vertical_nav">
      <div className="empty_container"></div>
      <ul>
        {iconCategories.map((icon, index) => (
          <li key={icon.name + index}>
            <img src={icon.image} alt={"icon " + icon.name}></img>
          </li>
        ))}
      </ul>
      <p>Copyright, SportSee 2020</p>
    </nav>
  );
};

export default VerticalNav;
