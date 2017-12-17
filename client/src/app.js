var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');

var onLoad = function() {
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('load', onLoad);
