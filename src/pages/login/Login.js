import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * Component React for display page Login.
 * Page Login will be necessary for user authentification.
 * For the moment, the page shows only 2 links to insert user's id in URL and
 * display data corresponding for each user in his homepage.
 * @component
 */
const Login = () => {
  return (
    <div className="pageLogin_container">
      <header className="pageLogin_header">
        <picture>
          <img src={logo} alt="logo Sportsee"></img>
        </picture>
      </header>
      <main className="pageLogin_main">
        <h1>Se connecter</h1>
        <ul>
          <li>
            <NavLink to="/homepage/12">
              <p>Karl</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/homepage/18">
              <p>Cecilia</p>
            </NavLink>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Login;
