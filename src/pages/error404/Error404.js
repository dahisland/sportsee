import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";

/**
 * Component React for page Error 404
 * @component
 */
const Error404 = () => {
  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
      <main className="pageError_main">
        <h1>Erreur 404</h1>
        <p>Oups ! La page que vous recherchez n'existe pas !</p>
        <NavLink to="/">Retour Accueil</NavLink>
      </main>
    </div>
  );
};

export default Error404;
