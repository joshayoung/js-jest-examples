require("dotenv").config();
const fetch = require("node-fetch");

function getData() {
  return fetch("https://api.github.com/users/joshayoung/repos", {
    headers: { Authorization: "token " + process.env.TOKEN }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data[0].id;
    });
}

module.exports = getData;
