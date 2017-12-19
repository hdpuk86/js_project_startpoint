var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');
var PlanetView = require('./views/planetView');
var flatEarth = require('./views/flatEarth');
var distanceUnitSelector;
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
  rulerStart = document.getElementById('planet_container').getBoundingClientRect().left - window.innerWidth / 2;
  if (rulerStart <= 0) {
    shakeRocketMan();
    var pixels = -rulerStart;
    var distance = pixels * parseFloat(distanceUnitSelector.value);
    var rounded = Math.round(distance * 100) / 100; // to 2 d.p.
    distanceMeter.innerText = rounded + ' ';
    navbar.style.visibility = 'visible';
    distanceMeter.style.visibility = 'visible';
    rocketMan.style.visibility = 'visible';
    distanceUnitSelector.style.visibility = 'visible';
  } else {
    navbar.style.visibility = 'hidden';
    distanceMeter.style.visibility = 'hidden';
    rocketMan.style.visibility = 'hidden';
    distanceUnitSelector.style.visibility = 'hidden';
  }
};

var onLoad = function() {
  distanceUnitSelector = document.getElementById('distance-unit');
  distanceUnitSelector.addEventListener('change', onScroll);
  navbar = document.getElementById('space-nav');
  distanceMeter = document.getElementById('distance-meter');
  rocketMan = document.getElementById('rocket_man');
  rocketMan.addEventListener('click', function(){
    var popup = new Popup();
    var youtube = '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/DtVBCG6ThDk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>'
    var videoDiv = document.createElement('div');
    videoDiv.innerHTML = youtube;
    popup.setContent(videoDiv);
    popup.display();
  })
  rulerStart = document.getElementById('planet_container').getBoundingClientRect().left - window.innerWidth/2;
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('keypress', flatEarth)
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);
