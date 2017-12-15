var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');

var onLoad = function() {
  new Request('/planets', HomeView);
  popup = new Popup();
};

window.addEventListener('load', onLoad);
