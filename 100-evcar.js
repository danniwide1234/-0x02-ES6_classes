/* eslint-disable no-unused-vars */
/* eslint-disable */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Spec = super.constructor[Symbol.species];
    return new Spec();
  }
}