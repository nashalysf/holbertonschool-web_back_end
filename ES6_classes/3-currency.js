export default class Currency {
  constructor(code, name) {
    if (typeof (name) !== 'string') throw TypeError('Name must be a string');
    if (typeof (code) !== 'string') throw TypeError('Code must be a string');

    this._name = name;
    this._code = code;
  }

  /* getter name */
  get name() {
    return this._name;
  }

  /* getter code */
  get code() {
    return this._code;
  }

  /* setter name */
  set name(value) {
    this._name = value;
  }

  /* setter code */
  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
