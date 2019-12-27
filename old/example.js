export default class Example {
  constructor() {}

  test() {
    return "test";
  }

  getData(url) {
    try {
      let token = window.localStorage.getItem('token');
      return fetch(url, {
        headers: {
          'Authorization': 'token ' + token
        },
      }).then(response => response.json());
    } catch (e) {
      console.log(e);
    }
  };

  populate(data, elem) {
    let all = "";
    data.forEach(element => {
      all += "<li>" + element.name + "</li>";
    });
    document.getElementById(elem).innerHTML = "<ul>" + all + "</ul>";
  }

  async load() {
    let data = await this.getData('https://api.github.com/users/joshayoung/repos');
    this.populate(data, 'data');
  }

  data(callback) {
    let prom = this.getData('https://api.github.com/users/joshayoung/repos');
    prom.then(res => {
      callback(res, 'results');
    });
  }

  myPromise() {
    return Promise.resolve("Yay!");
  }

  noPromise() {
    return Promise.reject("No!");
  }
};
