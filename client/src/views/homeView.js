var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var questionNumber;
var NameView = require('./nameView');

function addAllListeners(planet){
  var circle = document.getElementById(`circle_${planet.name}`);
  addHoverListener(planet, circle);
  addClickListener(planet, circle);
};

function addHoverListener(planet, div){
  var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
  var nameDiv = document.getElementById(`${planet.name}_name_div`);
  hoverDiv.style.opacity = 0;
  hoverDiv.style.transition = 'opacity 1.0s linear';
  div.addEventListener('mouseover', function(){
    hoverDiv.style.opacity = 1;
    hoverDiv.style.visibility = "visible";
    nameDiv.style.visibility = "visible";
  });
  div.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
    hoverDiv.style.opacity = 0;
    nameDiv.style.visibility = 'hidden';
  });
};

function addClickListener(planet, div){
  div.addEventListener('click', () => {
    popup = new Popup();
    var container = document.createElement('div');
    var upperSection = createUpperPopupSection(planet);
    var lowerSection = createLowerPopupSection(planet);
    var nav = createPopupNav(planet);
    container.appendChild(upperSection);
    container.appendChild(lowerSection);
    container.appendChild(nav);
    popup.setContent(container);
    popup.display();
  });
};

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

function createPopupNav(planet){
  var imgButton = createButton(planet);
  var nav = document.createElement('nav');
  nav.className = "popup-nav";
  nav.appendChild(imgButton);
  return nav;
};

function createButton(planet){
  var button = document.createElement('p');
  button.className = "popup-nav-btn";
  button.innerText = "QUIZ";
  button.addEventListener('click', function() {
    loadQuiz(planet, popup);
  })
  return button;
};

function loadQuiz(planet){
  questionNumber = 0;
  var div = new Quiz(planet, popup, questionNumber);
  popup.setContent(div);
};

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    div.appendChild(planetDiv);
    addAllListeners(planet);
  });
};

module.exports = HomeView;
