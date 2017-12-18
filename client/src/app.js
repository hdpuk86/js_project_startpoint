var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');
var PlanetView = require('./views/planetView');
var flatEarth = require('./views/flatEarth');
var distanceMeter;
var navbar;
var rulerStart;
var rocketMan;

var shakeRocketMan = function() {
  var currentTop = parseInt(window.getComputedStyle(rocketMan).getPropertyValue('top'));
  var randomShift = Math.floor(Math.random() * 11 - 5);
  rocketMan.style.top = (currentTop + randomShift) + 'px';
};

var onScroll = function() {
  var scrolled = window.scrollX;
  if (scrolled >= rulerStart) {
    shakeRocketMan();
    var km = (scrolled - rulerStart) * 3474.2;
    var lightMinutes = km / 17987547.5;
    var rounded = Math.round(lightMinutes * 100) / 100; // to 2 d.p.
    distanceMeter.innerText = rounded + ' light minutes';
    navbar.style.visibility = 'visible';
    distanceMeter.style.visibility = 'visible';
    rocketMan.style.visibility = 'visible';
  } else {
    navbar.style.visibility = 'hidden';
    distanceMeter.style.visibility = 'hidden';
    rocketMan.style.visibility = 'hidden';
  }
};

var onLoad = function() {
  navbar = document.getElementById('space-nav');
  distanceMeter = document.getElementById('distance-meter');
  rocketMan = document.getElementById('rocket_man');
  rulerStart = document.getElementById('planet_container').getBoundingClientRect().left - window.innerWidth/2;
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('keypress', flatEarth)
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);
