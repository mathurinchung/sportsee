export class UserModel {
  constructor(data) {
    this._id = data.user.id;
    this._userInfos = data.user.userInfos
    this._score = data.user.todayScore || data.user.score;
    this._keyData = data.user.keyData;
    this._activitySessions = data.activity.sessions;
    this._averageSessions = data.average.sessions;
    this._performance = data.performance.data;
  }

  get id() { return this._id; }

  get userInfos() { return this._userInfos; }

  get score() { return this._score; }

  get keyData() { return this._keyData; }

  get activitySessions() { return this._activitySessions; }

  get averageSessions() { return this._averageSessions; }

  get performance() { return this._performance };
}