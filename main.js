
import Data from "./asynchronous/data";
const data = new Data();

function cb(data) {
  let value = data.slip.advice;
  addTo(value);
}

function addTo(data) {
  document.write(data);
}

document.addEventListener("DOMContentLoaded", function () {
  data.getData(cb);
});