/**
 * Javascript file containing functions used to collect data by using mock data.
 * This file can be used to develop, implement and test code without calling data by api.
 * @file
 */

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/dataMock";
import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
  modelPerfData,
} from "../data/modelDatas";

/**
 * Function to get main user mock data
 * @param {number} userId - Number collected in the page's url by using a hook
 * @returns {object} - Object containing mock data formatted
 */
export const getMainMockedData = (userID) => {
  let userInfos = new modelUserMainData(
    USER_MAIN_DATA.find((item) => parseInt(item.id) === parseInt(userID))
  );

  return userInfos.formatUserMainData();
};

/**
 * Function to get user Activity mock data
 * @param {number} userId - Number collected in the page's url by using a hook
 * @returns {object} - Object containing mock data formatted
 */
export const getActivityMockedData = (userID) => {
  let userActivity = new modelActivityData(
    USER_ACTIVITY.find((item) => parseInt(item.userId) === parseInt(userID))
  );

  return userActivity.formatActivityData();
};

/**
 * Function to get user Sessions mock data
 * @param {number} userId - Number collected in the page's url by using a hook
 * @returns {object} - Object containing mock data formatted
 */
export const getSessionsMockedData = (userID) => {
  let userSessions = new modelSessionsData(
    USER_AVERAGE_SESSIONS.find(
      (item) => parseInt(item.userId) === parseInt(userID)
    )
  );

  return userSessions.formatSessionsData();
};

/**
 * Function to get user Performance mock data
 * @param {number} userId - Number collected in the page's url by using a hook
 * @returns {object} - Object containing mock data formatted
 */
export const getPerfMockedData = (userID) => {
  let userSessions = new modelPerfData(
    USER_PERFORMANCE.find((item) => parseInt(item.userId) === parseInt(userID))
  );

  return userSessions.formatPerfData();
};
