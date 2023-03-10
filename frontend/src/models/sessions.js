export default class SessionsModel {
  constructor(data) {
    this._sessions = data.sessions
  }

  get sessions() { return this._sessions; }
}