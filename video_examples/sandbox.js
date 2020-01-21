const fetch = require('node-fetch')

function getData(fetch) {
    fetch('https://api.github.com/users/joshayoung/repos',
    { headers: { Authorization: "token " }} 
    )
    return Promise.resolve("test")
}

module.exports = getData;