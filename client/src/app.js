var HomeView = require('./views/homeView');
var Request = require('./request');

var onLoad = function() {
  new Request('/planets', HomeView);
};

window.addEventListener('load', onLoad);
