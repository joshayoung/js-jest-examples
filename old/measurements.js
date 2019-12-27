import * as library from "./library"
export default class Measurements {
  constructor() {}

  bmi(h, w) {
    return library.bmi(h, w)
  }

  display() {
    document.getElementById('measurements').innerHTML = this.bmi(1, 2)
  }
};
