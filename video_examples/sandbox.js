require('dotenv').config();
const fetch = require('node-fetch')

function getData(fetch, process) {
  return fetch('https://api.github.com/users/joshayoung/repos',
    { 
      headers: { Authorization: "token " + process.env.TOKEN }
    }).then(response => response.json())
    .then(data => data[0].id)
}

const result = getData(fetch, process);

// result.then(dt => {
//     console.log(dt);
// })

module.exports = getData;