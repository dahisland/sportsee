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
import {
  userUseState,
  activityUseState,
  sessionsUseState,
  perfUseState,
} from "../../data/initUseStates";

// IMPORT MOCK DATA
import {
  getMainMockedData,
  getActivityMockedData,
  getSessionsMockedData,
  getPerfMockedData,
} from "../../service/getDataMocked";

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

  const [dataUser, setDataUser] = useState(userUseState);
  const [dataActivity, setDataActivity] = useState(activityUseState);
  const [dataSessions, setDataSessions] = useState(sessionsUseState);
  const [dataPerf, setDataPerf] = useState(perfUseState);

  useEffect(() => {
    window.scrollTo(0, 0);

    // USE DATA MOCKED
    setDataUser(getMainMockedData(userID));
    setDataActivity(getActivityMockedData(userID));
    setDataSessions(getSessionsMockedData(userID));
    setDataPerf(getPerfMockedData(userID));
  }, [userID]);

  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
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

              <RadialBarScore dataScore={dataUser.todayScore}></RadialBarScore>
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
    </div>
  );
};

export default Profile;
