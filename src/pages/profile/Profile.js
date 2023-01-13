import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";
import SectionHello from "../../components/sectionHello/SectionHello";
import KeyFiguresCard from "../../components/keyFiguresCard/KeyFiguresCard";
import BarChartActivity from "../../components/barChartActivity/BarChartActivity";
import RadialBarScore from "../../components/radialBarScore/RadialBarScore";
import LineChartSessions from "../../components/lineChartSessions/LineChartSessions";
import RadarChartPerf from "../../components/radarChartPerformance/RadarChartPerf";
import FetchError from "../../components/fetchError/FetchError";
import {
  userUseState,
  activityUseState,
  sessionsUseState,
  perfUseState,
} from "../../data/initUseStates";

// // IMPORT CALLS API DATA
import {
  getMainUserData,
  getActivityData,
  getSessionsData,
  getPerformanceData,
} from "../../service/getDataAPI";

// // IMPORT MOCK DATA
// import {
//   getMainMockedData,
//   getActivityMockedData,
//   getSessionsMockedData,
//   getPerfMockedData,
// } from "../../service/getDataMocked";

/**
 * Component React for display page Profile with charts and welcoming message
 * @component
 */
const Profile = () => {
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
  const [dataActivity, setDataActivity] = useState(activityUseState);
  const [dataSessions, setDataSessions] = useState(sessionsUseState);
  const [dataPerf, setDataPerf] = useState(perfUseState);

  useEffect(() => {
    setLoader(true);
    window.scrollTo(0, 0);

    // // USE DATA MOCKED
    // setDataUser(getMainMockedData(userID));
    // setDataActivity(getActivityMockedData(userID));
    // setDataSessions(getSessionsMockedData(userID));
    // setDataPerf(getPerfMockedData(userID));

    /**
     * Calls from api and set each data used for charts
     * @async
     * @returns {void}
     */
    let getAllData = async () => {
      try {
        let promiseAllData = await Promise.all([
          getMainUserData(userID),
          getActivityData(userID),
          getSessionsData(userID),
          getPerformanceData(userID),
        ]);
        setFetchData(true);
        setDataUser(promiseAllData[0]);
        setDataActivity(promiseAllData[1]);
        setDataSessions(promiseAllData[2]);
        setDataPerf(promiseAllData[3]);
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
        <main className="pageProfile_main">
          <SectionHello name={dataUser.userInfos.firstName} />

          <section className="mainSection_statistics">
            <article className="statistics_charts">
              <div className="charts_flexboxContainer">
                <BarChartActivity
                  dataActivity={dataActivity.sessions}
                ></BarChartActivity>

                <LineChartSessions
                  dataSessions={dataSessions.sessions}
                ></LineChartSessions>

                <RadarChartPerf dataPerf={dataPerf.data}></RadarChartPerf>

                <RadialBarScore
                  dataScore={dataUser.todayScore}
                ></RadialBarScore>
              </div>
            </article>

            <article className="statistics_keyFigures">
              {dataUser.keyData.map((item, index) => (
                <KeyFiguresCard
                  image={item.icon}
                  name={item.label}
                  value={item.count}
                  key={item.label + index}
                />
              ))}
            </article>
          </section>
        </main>
      ) : (
        <FetchError apiError={apiError} loader={loader} />
      )}
    </div>
  );
};

export default Profile;
