const getData = require('./github');
const fetch = require('node-fetch')

const result = getData(fetch, process);

result.then(dt => {
    console.log(dt);
})