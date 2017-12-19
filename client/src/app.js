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
    if (navbar && distanceMeter && rocketMan) {
      navbar.style.visibility = 'hidden';
      distanceMeter.style.visibility = 'hidden';
      rocketMan.style.visibility = 'hidden';
      distanceUnitSelector.style.visibility = 'hidden';
    }
  }
};

var onWheel = function(event) {
  window.scrollBy(event.deltaY, 0);
};

var onLoad = function() {
  distanceUnitSelector = document.getElementById('distance-unit');
  distanceUnitSelector.addEventListener('change', onScroll);
  navbar = document.getElementById('space-nav');
  distanceMeter = document.getElementById('distance-meter');
  rocketMan = document.getElementById('rocket_man');
  rocketMan.addEventListener('click', function(){
    console.log(this.src);
    if(this.src == "http://localhost:3000/images/rocket_man.png"){
      this.src = "../images/enterprise.png"
      this.style.width = '10vw';
    }else{
      this.src = "../images/rocket_man.png"
      this.style.width = '4vw';

    }
  })
  startButton = document.getElementById('start_button');
  startButton.addEventListener('click', () => window.scrollTo(0, 0));
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('keypress', flatEarth)
window.addEventListener('scroll', onScroll);
window.addEventListener('wheel', onWheel);
window.addEventListener('load', onLoad);
