/**
 * Javascript file containing all class used to format datas locally imported or called by api
 * @file
 */

/**
 * Create an instance object with formatted main user mock data or main user data called by api.
 * @class
 */
export class modelUserMainData {
  constructor(apiDataUserMain) {
    this.id = parseInt(apiDataUserMain.id);
    this.firstName = String(apiDataUserMain.userInfos.firstName);
    this.lastName = String(apiDataUserMain.userInfos.lastName);
    this.age = parseInt(apiDataUserMain.userInfos.age);
    // replace key 'store' to key 'todayScore' if data called contains a key 'store'
    apiDataUserMain.score
      ? (this.todayScore = parseFloat(apiDataUserMain.score))
      : (this.todayScore = parseFloat(apiDataUserMain.todayScore));
    this.calorieCount = parseFloat(apiDataUserMain.keyData.calorieCount);
    this.proteinCount = parseFloat(apiDataUserMain.keyData.proteinCount);
    this.carbohydrateCount = parseFloat(
      apiDataUserMain.keyData.carbohydrateCount
    );
    this.lipidCount = parseFloat(apiDataUserMain.keyData.lipidCount);
  }

  /**
   * Static method used to structure data formatting
   * @returns {object} - Object containing useful main user data to exploit
   */
  formatUserMainData() {
    let objMainData = {
      id: this.id,
      userInfos: {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      },
      /**
       * Key containing a reference value for the radialChart score and user today's score converted in percentage
       * @type {array}
       */
      todayScore: [
        { name: "Max", value: 100, fill: "transparent" },
        { name: "Score", value: this.todayScore * 100, fill: "#FF0000" },
      ],
      /**
       * Key containing french labels, url icons and units for values used in the right cards
       * @type {array}
       */
      keyData: [
        {
          label: "Calories",
          count: this.calorieCount.toLocaleString("en-US") + "kCal",
          icon: "calories-icon.svg",
        },
        {
          label: "Proteines",
          count: this.proteinCount + "g",
          icon: "protein-icon.svg",
        },
        {
          label: "Glucides",
          count: this.carbohydrateCount + "g",
          icon: "carbs-icon.svg",
        },
        {
          label: "Lipides",
          count: this.lipidCount + "g",
          icon: "lipid-icon.svg",
        },
      ],
    };

    return objMainData;
  }
}

/**
 * Create an instance object with formatted user Activity mock data or user Activity data called by api.
 * @class
 */
export class modelActivityData {
  constructor(apiDataActivity) {
    this.userId = parseInt(apiDataActivity.userId);
    this.sessions = apiDataActivity.sessions;
  }

  /**
   * Static method used to structure data formatting
   * @returns {object} - Object containing useful Activity data to exploit
   */
  formatActivityData() {
    let objActivityData = {
      userId: this.userId,
      /**
       * Key containing weights values sorted in ascending order to easily use the min and max values in the barChart activity
       * @type {array}
       */
      sessions: this.sessions.sort(function (a, b) {
        return a.kilogram - b.kilogram;
      }),
    };

    objActivityData.sessions.map(function (el) {
      el.day = String(el.day);
      /**
       * Key containing the day number formatted on format 'x' if number <10 or 'xx' if number >=10
       * @type {number | undefined}
       */
      el.dayFormatted =
        el.day !== undefined
          ? parseFloat(el.day.split("-")[2].replace(/^0/, ""))
          : undefined;
      el.kilogram = parseFloat(el.kilogram);
      el.calories = parseFloat(el.calories);

      return el;
    });

    return objActivityData;
  }
}

/**
 * Create an instance object with formatted user Sessions mock data or user Sessions data called by api.
 * @class
 */
export class modelSessionsData {
  constructor(apiDataSessions) {
    this.userId = parseInt(apiDataSessions.userId);
    this.sessions = apiDataSessions.sessions;
  }

  /**
   * Static method used to structure data formatting
   * @returns {object} - Object containing useful Sessions data to exploit
   */
  formatSessionsData() {
    /**
     * Array containing strings of the week's days
     * @constant
     * @type {array}
     */
    const days = [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ];

    let objSessionsData = {
      userId: parseInt(this.userId),
      sessions: this.sessions,
    };

    objSessionsData.sessions.map(function (el) {
      el.day = parseInt(el.day);
      /**
       * Key containing label of week's day on format 'X' where 'X' is the first letter of this day
       * @type {string}
       */
      el.dayLabel = String(days[el.day - 1][0]);
      el.sessionLength = parseInt(el.sessionLength);

      return el;
    });

    return objSessionsData;
  }
}

/**
 * Create an instance object with formatted user Performance mock data or user Performance data called by api.
 * @class
 */
export class modelPerfData {
  constructor(apiDataPerf) {
    this.userId = parseInt(apiDataPerf.userId);
    this.kind = apiDataPerf.kind;
    this.data = apiDataPerf.data.map(function (el) {
      el.value = parseInt(el.value);
      el.kind = Number(el.kind);
      return el;
    });
  }

  /**
   * Static method used to structure data formatting
   * @returns {object} - Object containing useful Performance data to exploit
   */
  formatPerfData() {
    /**
     * Array containing strings of french label's kind
     * @constant
     * @type {array}
     */
    const frenchKind = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    let objPerfData = {
      userId: this.userId,
      /**
       * Key containing an array with all the kind values data with their french labels equivalences
       * @type {array}
       */
      kind: Object.keys(this.kind).map(function (key) {
        return [Number(key), frenchKind[key - 1]];
      }),
      data: this.data,
    };

    objPerfData.data.forEach((el) => {
      /**
       * Key containing the french label corresponding to the current data value
       * @type {string}
       */
      el.subject = String(
        objPerfData.kind.find((item) => item[0] === el.kind)[1]
      );
    });

    return objPerfData;
  }
}
