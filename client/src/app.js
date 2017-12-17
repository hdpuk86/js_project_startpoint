var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');

var PlanetView = require('./views/planetView');
var distanceMeter;

var onScroll = function() {
  var scrolled = window.scrollX;
  var rulerStart = 5000 - window.innerWidth/2;
  if (scrolled >= rulerStart) {
    var km = (scrolled - rulerStart) * 3474.2;
    var lightMinutes = km / 17987547.5;
    var rounded = Math.round(lightMinutes * 100) / 100; // to 2 d.p.
    distanceMeter.innerText = rounded + ' light minutes';
    distanceMeter.style.visibility = 'visible';
  } else {
    distanceMeter.style.visibility = 'hidden';
  }
};

var onLoad = function() {
  distanceMeter = document.getElementById('distance-meter');  
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);
