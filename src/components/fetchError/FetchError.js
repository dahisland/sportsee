import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";

/**
 * Component React for display an error message when calls api data failed to load data
 * @component
 */
const FetchError = ({ apiError, loader }) => {
  function refreshPage() {
    window.location.reload(false);
  }

  return loader ? (
    <Loader />
  ) : (
    <main className="pageHome_main">
      <section className="mainSection_fetchError">
        <div className="fetchError_message">
          <p>Une erreur est survenue dans le chargement des données. </p>
          <p>Type error : {apiError}</p>
        </div>

        <div className="fetchError_nav">
          <p onClick={refreshPage}>Recharger la page</p>
          <NavLink to="/">Se déconnecter</NavLink>
        </div>
      </section>
    </main>
  );
};

export default FetchError;
