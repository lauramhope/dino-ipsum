export default class DinoIpsum {  
  static getDinos(word) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=3&words=${word}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, word]);
        } else {
          reject([this, response, word]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }

}