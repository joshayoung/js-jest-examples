import Example from "./scripts/example.js"
import Measurements from "./scripts/measurements";

let example = new Example();
let measurements = new Measurements();

document.addEventListener("DOMContentLoaded", function () {
  example.load();
  measurements.display();
});
