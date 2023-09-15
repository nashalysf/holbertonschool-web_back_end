import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') throw TypeError('Amount must be a number');

    this._amount = amount;
    this._currency = currency;
  }

  /* getter amount */
  get amount() {
    return this._amount;
  }

  /* getter currency */
  get currency() {
    return this._currency;
  }

  /* setter amount */
  set amount(value) {
    this._amount = value;
  }

  /* setter currency */
  set currency(value) {
    if (value instanceof Currency) this._currency = value;
  }

  displayFullPrice() {
    const currencyAll = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyAll}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
