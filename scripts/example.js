export default class Example {
  constructor() {}

  test() {
    return "test";
  }

  getData(url) {
    let token = window.localStorage.getItem('token');
    return fetch(url, {
      headers: {
        'Authorization': 'token ' + token
      },
    }).then(response => response.json());
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

  data() {
    let prom = this.getData('https://api.github.com/users/joshayoung/repos');
    prom.then(res => {
      this.populate(res, 'results');
    });
  }
};