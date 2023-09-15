export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Car = this.constructor[Symbol.species];
    return new Car(this._brand, this._motor, this._color);
  }
}
