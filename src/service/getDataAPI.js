/**
 * Javascript file containing functions used to fetch data by using calls to api
 * @file
 */

import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
  modelPerfData,
} from "../data/modelDatas";

/**
 * Function to get main user data by calling api
 * @param {number} userId - Number collected in the page's url by using a hook
 * @async
 * @returns {object} - Object containing formatted data called
 */
export const getMainUserData = async (userID) => {
  const mainData = await fetch(`http://localhost:3000/user/${userID}`);
  const mainDataJson = await mainData.json();
  const formatMainDataJson = new modelUserMainData(mainDataJson.data);

  return formatMainDataJson.formatUserMainData();
};

/**
 * Function to get user Activity data by calling api
 * @param {number} userId - Number collected in the page's url by using a hook
 * @async
 * @returns {object} - Object containing formatted data called
 */
export const getActivityData = async (userID) => {
  const activityData = await fetch(
    `http://localhost:3000/user/${userID}/activity`
  );
  const activityDataJson = await activityData.json();
  const formatActivityJson = new modelActivityData(activityDataJson.data);

  return formatActivityJson.formatActivityData();
};

/**
 * Function to get user Sessions data by calling api
 * @param {number} userId - Number collected in the page's url by using a hook
 * @async
 * @returns {object} - Object containing formatted data called
 */
export const getSessionsData = async (userID) => {
  const sessionsData = await fetch(
    `http://localhost:3000/user/${userID}/average-sessions`
  );
  const sessionsDataJson = await sessionsData.json();
  const formatSessionsJson = new modelSessionsData(sessionsDataJson.data);

  return formatSessionsJson.formatSessionsData();
};

/**
 * Function to get user Performance data by calling api
 * @param {number} userId - Number collected in the page's url by using a hook
 * @async
 * @returns {object} - Object containing formatted data called
 */
export const getPerformanceData = async (userID) => {
  const perfData = await fetch(
    `http://localhost:3000/user/${userID}/performance`
  );
  const perfDataJson = await perfData.json();
  const formatPerfJson = new modelPerfData(perfDataJson.data);

  return formatPerfJson.formatPerfData();
};
