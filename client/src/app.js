var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');
var PlanetView = require('./views/planetView');
var distanceMeter;
var navbar;
var rulerStart;

var onScroll = function() {
  var scrolled = window.scrollX;
  if (scrolled >= rulerStart) {
    var km = (scrolled - rulerStart) * 3474.2;
    var lightMinutes = km / 17987547.5;
    var rounded = Math.round(lightMinutes * 100) / 100; // to 2 d.p.
    distanceMeter.innerText = rounded + ' light minutes';
    navbar.style.visibility = 'visible';
    distanceMeter.style.visibility = 'visible';
  } else {
    navbar.style.visibility = 'hidden';
    distanceMeter.style.visibility = 'hidden';
  }
};

function addSmoothScrollToButtons(){
  var buttons = document.getElementsByClassName('nav_icon');
  debugger;
  for (var i = 0; i < buttons.length; i++){
    console.log(buttons[i].src);
  }


  // var adventureBtn = document.getElementById('adventure-button');
  // adventureBtn.addEventListener('click', function(){
  //   window.scroll({
  //     top: 0,
  //     left: 5000,
  //     behavior: 'smooth'
  //   });
}

var onLoad = function() {
  navbar = document.getElementById('space-nav');
  distanceMeter = document.getElementById('distance-meter');
  rulerStart = document.getElementById('planet_container').getBoundingClientRect().left - window.innerWidth/2;
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
  addSmoothScrollToButtons();
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);
