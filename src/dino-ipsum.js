export default class DinoIpsum {  
  static getDinos(wordNum) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=${wordNum}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, wordNum]);
        } else {
          reject([this, response, wordNum]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }

}