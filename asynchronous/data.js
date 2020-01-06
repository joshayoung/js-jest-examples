import { fetch } from "whatwg-fetch";

export default class Data {
  constructor() { }

  getData(cb) {
    try {
      fetch('https://api.adviceslip.com/advice/1')
      .then((response) => {
          return response.json();
      })
      .then((myJson) => {
          cb(myJson);
      });
    } catch(e) {
    }
  }
}
  