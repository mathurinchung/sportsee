export default class PerformanceModel {
  constructor(data) {
    this._kind = data.kind;
    this._data = data.data;
  }

  get kind() { return this._kind; }

  get data() { return this._data; }
}