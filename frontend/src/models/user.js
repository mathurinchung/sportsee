/**
 * A class representing a user model.
 *
 * @class
 * @name UserModel
 * @param { Object } data - The data object to be used to initialize the model.
 */
export default class UserModel {
  constructor(data) {
    this._id = data.user.id;
    this._userInfos = data.user.userInfos
    this._score = data.user.todayScore || data.user.score;
    this._keyData = data.user.keyData;
    this._activitySessions = data.activity.sessions;
    this._averageSessions = data.average.sessions;
    this._performance = data.performance.data;
  }

  /**
   * Returns the ID of the user.
   *
   * @function
   * @name UserModel#id
   * @returns { string } The ID of the user.
   */
  get id() { return this._id; }

  /**
   * Returns the information of the user.
   *
   * @function
   * @name UserModel#userInfos
   * @returns { Object } The information of the user.
   */
  get userInfos() { return this._userInfos; }

  /**
   * Returns the score of the user.
   *
   * @function
   * @name UserModel#score
   * @returns { number } The score of the user.
   */
  get score() { return this._score; }

  /**
   * Returns the key data of the user.
   *
   * @function
   * @name UserModel#keyData
   * @returns { Object } The key data of the user.
   */
  get keyData() { return this._keyData; }

  /**
   * Returns the activity sessions of the user.
   *
   * @function
   * @name UserModel#activitySessions
   * @returns { Object[] } The activity sessions of the user.
   */
  get activitySessions() { return this._activitySessions; }

  /**
   * Returns the average sessions of the user.
   *
   * @function
   * @name UserModel#averageSessions
   * @returns { Object[] } The average sessions of the user.
   */
  get averageSessions() { return this._averageSessions; }

  /**
   * Returns the performance data of the user.
   *
   * @function
   * @name UserModel#performance
   * @returns { Object[] } The performance data of the user.
   */
  get performance() { return this._performance };
}