var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');

var PlanetView = require('./views/planetView');
var distanceMeter;

var onScroll = function() {
  distanceMeter.innerText = Math.round(((window.scrollX * 3474.2) / 17987547.5)*100) / 100 + ' light minutes';
};

var onLoad = function() {
  distanceMeter = document.getElementById('distance-meter');  
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);
