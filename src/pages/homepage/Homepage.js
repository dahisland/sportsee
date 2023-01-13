import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";
import { userUseState } from "../../data/initUseStates";
import logo from "../../assets/icon-logo.svg";

// // IMPORT MOCK DATA
import { getMainMockedData } from "../../service/getDataMocked";

/**
 * Component React for display page Homepage
 * @component
 */
const Homepage = () => {
  /**
   * User's id number collected by a hook in the page's URL
   * @constant
   * @type {number}
   */
  const { userID } = useParams();

  const [dataUser, setDataUser] = useState(userUseState);

  useEffect(() => {
    window.scrollTo(0, 0);

    // USE DATA MOCKED
    setDataUser(getMainMockedData(userID));
  }, [userID]);

  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
      <main className="pageHome_main">
        <section className="mainSection_welcome">
          <h1>
            Bienvenue sur votre espace personnel{" "}
            <span>{dataUser.userInfos.firstName}</span>
          </h1>
          <img src={logo} alt="logo sportsee" width="200px" />
          <p className="logo_title">SportSee</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
