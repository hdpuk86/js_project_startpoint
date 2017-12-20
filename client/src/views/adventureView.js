var AdventurePlanet = require('./adventurePlanetView');
var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var questionNumber;
var NameView = require('./nameView');

function addAllListeners(planet){
  var circle = document.getElementById(`adventure_${planet.name}_circle`);
  var nameDiv = document.getElementById(`${planet.name}_name_adventure`);
  var planetBtn = document.getElementById(`${planet.name}_button`);
  var destroyBtn = document.getElementById(`${planet.name}_destroy`);
  addHoverListener(planet, circle);
  addHoverListener(planet, nameDiv);
  addClickListener(planet, circle);
  addClickListener(planet, nameDiv);
  planetBtn.addEventListener('click', function(){
    smoothScroll(planet.distance+2500);
  })
  destroyBtn.addEventListener('click', function(){
    destroyPlanet(planet);
  })
};

function destroyPlanet(planet){
  var circle = document.getElementById(`adventure_${planet.name}_circle`);
  circle.style.backgroundColor = 'black';
  circle.style.width = 'auto';
  circle.style.height = 'auto';
  var nameTag = document.getElementById(`${planet.name}_name_adventure`);
  var div = document.getElementById(`adventure_${planet.name}_div`);
  var img = document.createElement('img');
  img.src = '../images/blackhole.png';
  img.width = 50;
  nameTag.innerText = 'MERCURY WAZ ERE';
  nameTag.style.color = planet.colour;
  circle.appendChild(img);
}

function addHoverListener(planet, div){
  var hoverDiv = document.getElementById(`hover_${planet.name}_adventure`);
  div.addEventListener('mouseover', function(){
    hoverDiv.style.visibility = "visible";
  });
  div.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
  });
};

function addClickListener(planet, div){
  div.addEventListener('click', () => {
    popup = new Popup();
    var container = createPopupInfoView(planet);
    popup.setContent(container);
    popup.display();
  });
};

function createPopupInfoView(planet){
  var container = document.createElement('div');
  var upperSection = createUpperPopupSection(planet);
  var lowerSection = createLowerPopupSection(planet);
  container.appendChild(upperSection);
  container.appendChild(lowerSection);
  setPopupNav(planet);
  return container;
};

function setPopupNav(planet){
  var nav = document.getElementById('popup-nav');
  nav.innerHTML = '';
  var quizButton = createButton(planet, loadQuiz, "QUIZ");
  var homeButton = createButton(planet, loadHome, planet.name.toUpperCase());
  nav.appendChild(quizButton);
  nav.appendChild(homeButton);
  return nav;
};

function createButton(planet, callback, buttonText){
  var button = document.createElement('p');
  button.className = "popup-nav-btn";
  button.innerText = buttonText;
  button.addEventListener('click', function(){
    callback(planet);
  });
  return button;
};

function loadHome(planet){
  var container = createPopupInfoView(planet);
  popup.setContent(container);
}

function createUpperPopupSection(planet){
  var name = new NameView(planet);
  name.className = "popup-title";
  var upperSection = document.createElement('section');
  upperSection.className = "popup-upper";
  var videoDiv = document.createElement('div');
  videoDiv.innerHTML = planet.youtubeEmbed;
  upperSection.appendChild(name);
  upperSection.appendChild(videoDiv);
  return upperSection;
};

function createLowerPopupSection(planet){
  var pieChart = new PieCompView(planet);
  var lowerSection = document.createElement('section');
  lowerSection.className = "popup-lower";
  var textDiv = document.createElement('div');
  textDiv.className = "popup-text";
  textDiv.innerHTML = planet.description;
  lowerSection.appendChild(textDiv);
  lowerSection.appendChild(pieChart);
  return lowerSection;
};

function loadQuiz(planet){
  questionNumber = 0;
  var div = new Quiz(planet, popup, questionNumber);
  popup.setContent(div);
};

function smoothScroll(scrollToPx){
  window.scroll({
    top: 0,
    left: scrollToPx,
    behavior: 'smooth'
  });
}

var AdventureView = function(planets) {
  var div = document.getElementById('planet_container');
  planets.forEach(function(planet){
    var planetDiv = new AdventurePlanet(planet);
    div.appendChild(planetDiv);
    addAllListeners(planet);
  });
};

module.exports = AdventureView;
