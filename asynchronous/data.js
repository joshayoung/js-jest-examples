export default class Data {
    constructor() { }

    getData(cb) {
        fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            cb(response.json());
        })
        .then((myJson) => {
            console.log(myJson);
        });
    }
  }
  