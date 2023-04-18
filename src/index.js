import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './dino-ipsum.js';

// Business Logic

function getDinos(word) {
  let promise = DinoIpsum.getDinos(word);
  promise.then(function(dinoLoremIpsum) {
    printElements(dinoLoremIpsum);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// UI Logic

function printElements() {
  document.querySelector('#showResponse').innerText;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the dino lorem ipsum for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const word = document.querySelector('#word').value;
  document.querySelector('#paragraph').value = null;
  getDinos(word);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});