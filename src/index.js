import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './dino-ipsum.js';

// Business Logic

function getDinos(wordNum) {
  let promise = DinoIpsum.getDinos(wordNum);
  promise.then(function(loremIpsum) {
    printElements(loremIpsum);
  }, function(errorArray) {
    printError(errorArray);
  });
  if (wordNum < 1) {
    return window.alert("Please enter a positive number!");
  }
}

// UI Logic

function printElements(loremIpsum) {
  document.querySelector('#showResponse').innerText = `${loremIpsum[0]} are all dinosaurs!`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the dino lorem ipsum for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const wordNum = document.querySelector('#wordNum').value;
  document.querySelector('#wordNum').innerText = null;
  getDinos(wordNum);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});