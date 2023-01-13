import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * Component React for display horizontal application's navigation
 * @component
 */
const HorizontalNav = () => {
  /**
   * User's id number collected by a hook in the page's URL
   * @constant
   * @type {number}
   */
  const { userID } = useParams();
  /**
   * Array containing objects with name and uri for each navigation's link
   * @constant
   * @type {array}
   */
  const navItems = [
    { name: "Accueil", uri: "/homepage/" },
    { name: "Profil", uri: "/profile/" },
    { name: "Réglage", uri: "/setting/" },
    { name: "Communauté", uri: "/community/" },
  ];

  return (
    <header className="header_horizontal">
      <nav className="horizontal_nav">
        <NavLink to="/">
          <picture>
            <img src={logo} alt="logo SportSee"></img>
          </picture>
        </NavLink>
        {navItems.map((item, index) => (
          <NavLink
            to={item.uri + userID}
            key={item.name + index}
            className={(nav) =>
              nav.isActive ? "nav_goToPage--active" : "nav_goToPage"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default HorizontalNav;
