import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";
import { userUseState } from "../../data/initUseStates";
import FetchError from "../../components/fetchError/FetchError";
import logo from "../../assets/icon-logo.svg";

// // IMPORT CALLS API DATA
import { getMainUserData } from "../../service/getDataAPI";

// // IMPORT MOCK DATA
// import {
//   getMainMockedData,
// } from "../../service/getDataMocked";

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
  /**
   * Hook to define calls api status
   * @constant
   * @type {boolean}
   */
  const [fetchData, setFetchData] = useState(false);
  /**
   * Hook to define message error when calls api data fails
   * @constant
   * @type {string}
   */
  const [apiError, setApiError] = useState("");
  /**
   * Hook to define loader status.
   * @constant
   * @type {boolean}
   */
  const [loader, setLoader] = useState(true);

  const [dataUser, setDataUser] = useState(userUseState);

  useEffect(() => {
    setLoader(true);
    window.scrollTo(0, 0);

    // // USE DATA MOCKED
    // setDataUser(getMainMockedData(userID));

    /**
     * Calls from api and set each data used for charts
     * @async
     * @returns {void}
     */
    let getAllData = async () => {
      try {
        let promiseAllData = await Promise.all([getMainUserData(userID)]);
        setFetchData(true);
        setDataUser(promiseAllData[0]);
      } catch (error) {
        setLoader(false);
        setFetchData(false);
        setApiError(error.message);
        console.log(error);
      }
    };
    getAllData();
  }, [userID]);

  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
      {fetchData === true ? (
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
      ) : (
        <FetchError apiError={apiError} loader={loader} />
      )}
    </div>
  );
};

export default Homepage;
