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

  populate(data) {
    let all = "";
    data.forEach(element => {
      all += "<li>" + element.name + "</li>";
    });
    document.getElementById('data').innerHTML = "<ul>" + all + "</ul>";
  }

  async load() {
    let data = await this.getData('https://api.github.com/users/joshayoung/repos');
    this.populate(data);
  }
};