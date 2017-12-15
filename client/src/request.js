var Request = function(url, callback) {
  var onRequestLoad = function(event) {
    if (this.status !== 200) return callback([]);
    var resultString = event.target.responseText;
    var result = JSON.parse(resultString);
    callback(result);
  };

  var startRequest = function() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', onRequestLoad);
    request.send();
  };

  startRequest();
};

module.exports = Request;
