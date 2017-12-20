var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var AdventureView = require('./views/adventureView');
var PlanetView = require('./views/planetView');
var flatEarth = require('./views/flatEarth');
var playMusic = require('./views/playMusic');
var distanceUnitSelector;
var distanceMeter;
var navbar;
var rulerStart;
var rocketMan;
var popup;

var shakeRocketMan = function() {
  var currentTop = parseInt(window.getComputedStyle(rocketMan).getPropertyValue('top'));
  var randomShift = Math.floor(Math.random() * 11 - 5);
  var newY = currentTop + randomShift;
  if (newY > 100 && newY < window.innerHeight - 100) {
    rocketMan.style.top = newY + 'px';
  }
};

function showDestoyButton(distance){
  var buttons = document.getElementsByClassName('destroy_planet');
  if(distance > 3.21 && distance < 3.31){
    buttons[1].style.visibility = "visible";
  }
  else if (distance > 6.03 && distance < 6.13) {
    buttons[2].style.visibility = "visible";
  }
  else if (distance > 8.30 && distance < 8.35) {
    buttons[3].style.visibility = "visible";
  }
  else if (distance > 8.35 && distance < 8.40) {
    buttons[4].style.visibility = "visible";
  }
  else if (distance > 12.74 && distance < 12.84) {
    buttons[5].style.visibility = "visible";
  }
  else if (distance > 43.33 && distance < 43.44) {
    buttons[6].style.visibility = "visible";
  }
  else if (distance > 79.86 && distance < 79.76) {
    buttons[7].style.visibility = "visible";
  }
  else if (distance > 160.35 && distance < 160.45) {
    buttons[8].style.visibility = "visible";
  }
  else if (distance > 251.25 && distance < 251.35) {
    buttons[9].style.visibility = "visible";
  }
  else if (distance > 329.33 && distance < 329.43) {
    buttons[10].style.visibility = "visible";
  }
  else {
    [...document.getElementsByClassName('destroy_planet')].forEach((button) => {
      button.style.visibility = 'hidden';
    })
  }

}

var onScroll = function() {
  rulerStart = document.getElementById('planet_container').getBoundingClientRect().left - window.innerWidth / 2;
  if (rulerStart <= 0) {
    shakeRocketMan();
    var pixels = -rulerStart;
    var distance = pixels * parseFloat(distanceUnitSelector.value);
    if (rocketMan.src == "http://localhost:3000/images/deathstar.png"){
      showDestoyButton(distance);
    }
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
  if (popup.style.display !== 'block') {
    window.scrollBy(event.deltaY, 0);
  }
};

var onLoad = function() {
  popup = document.getElementById('testPopup');
  distanceUnitSelector = document.getElementById('distance-unit');
  distanceUnitSelector.addEventListener('change', onScroll);
  navbar = document.getElementById('space-nav');
  distanceMeter = document.getElementById('distance-meter');
  rocketMan = document.getElementById('rocket_man');
  rocketMan.addEventListener('click', function(){
    var audio = document.getElementById('elton');
    if(this.src == "http://localhost:3000/images/rocket_man.png"){
      this.src = "../images/enterprise.png"
      this.style.width = '10vw';
      audio.src = '../audio/startrek.mp3'
      playMusic();
    }else if(this.src == "http://localhost:3000/images/enterprise.png"){
      this.src = "../images/deathstar.png"
      this.style.width = '10vw';
      audio.src = '../audio/starwars.mp3'
    } else if (this.src == "http://localhost:3000/images/deathstar.png"){
      this.src = "../images/superman.png"
      this.style.width = '10vw';
      audio.src = '../audio/superman.mp3'
    }else {
      this.src = "../images/rocket_man.png"
      this.style.width = '4vw';
      audio.src = '../audio/rocket_man.mp3'
    }
  })
  startButton = document.getElementById('start_button');
  startButton.addEventListener('click', () => window.scrollTo(0, 0));
  new Request('/planets', HomeView);
  new Request('/planets', AdventureView);
};

window.addEventListener('keypress', playMusic);
window.addEventListener('keypress', flatEarth);
window.addEventListener('scroll', onScroll);
window.addEventListener('wheel', onWheel);
window.addEventListener('load', onLoad);
