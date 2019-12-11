export default class Example {
  constructor() { }

  test() {
    return "test";
  }

  getData(url) {
    let token = window.localStorage.getItem('token');
    return fetch(url
    , {headers: {'Authorization': 'token ' + token},}
    ).then((response) => {
      return response.json();
    }
    );
  };

  load() {
    let data = this.getData('https://api.github.com/users/joshayoung/repos')
    document.getElementById('data').innerHTML = data;
  }
};
