export default class Building {
  constructor(sqft) {
    if (typeof (this.evacuationWarningMessage) === 'undefined' && this.constructor !== Building) throw new Error('Class extending Building must override evacuationWarningMessage');

    this._sqft = sqft;
  }

  /* getter sqft */
  get sqft() {
    return this._sqft;
  }

  /* setter sqft */
  set sqft(value) {
    this._sqft = value;
  }
}
