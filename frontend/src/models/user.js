export default class UserModel {
  constructor(data) {
    this._id = data.id;
    this._userInfos = data.userInfos
    this._todayScore = data.todayScore;
    this._keyData = data.keyData
  }

  get id() { return this._id; }

  get userInfos() { return this._userInfos; }

  get todayScore() { return this._todayScore; }

  get keyData() { return this._keyData; }
}