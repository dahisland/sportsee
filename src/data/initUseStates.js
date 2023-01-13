/**
 * Javascript file containing objects used to init useState() in the Homepage component
 * @file
 */

/**
 * Object containing main user data structure with 'undefined' default values, after data has been called and formatted
 * @constant
 * @type {object}
 */
export const userUseState = {
  id: undefined,
  userInfos: {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
  },
  todayScore: [
    { name: undefined, value: undefined, fill: undefined },
    { name: undefined, value: undefined, fill: undefined },
  ],
  keyData: [
    {
      label: undefined,
      count: undefined,
      icon: undefined,
    },
  ],
};

/**
 * Object containing user Activity data structure with 'undefined' default values, after data has been called and formatted
 * @constant
 * @type {object}
 */
export const activityUseState = {
  userId: undefined,
  sessions: [
    {
      day: undefined,
      dayFormatted: undefined,
      kilogram: undefined,
      calories: undefined,
    },
  ],
};

/**
 * Object containing user Sessions data structure with 'undefined' default values, after data has been called and formatted
 * @constant
 * @type {object}
 */
export const sessionsUseState = {
  userId: undefined,
  sessions: [
    {
      day: undefined,
      dayLabel: undefined,
      sessionLength: undefined,
    },
  ],
};

/**
 * Object containing user Performance data structure with 'undefined' default values, after data has been called and formatted
 * @constant
 * @type {object}
 */
export const perfUseState = {
  userId: undefined,
  kind: [[undefined, undefined]],
  data: [
    {
      value: undefined,
      kind: undefined,
      subject: undefined,
    },
  ],
};
