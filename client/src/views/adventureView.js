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

  addHoverListener(planet, circle);
  addHoverListener(planet, nameDiv);
  addClickListener(planet, circle);
  addClickListener(planet, nameDiv);

  planetBtn.addEventListener('click', function(){
    smoothScroll(planet.distance+2500);
  })
};

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
  var imgButton = createButton(planet);
  var pieChart = new PieCompView(planet);
  var name = new NameView(planet);
  name.className = "popup-title";
  div.addEventListener('click', () => {
    popup = new Popup();
    var div = document.createElement('div');
    var upperSection = document.createElement('section');
    upperSection.className = "popup-upper";
    var videoDiv = document.createElement('div');
    videoDiv.innerHTML = planet.youtubeEmbed;
    upperSection.appendChild(name);
    upperSection.appendChild(videoDiv);

    var lowerSection = document.createElement('section');
    lowerSection.className = "popup-lower";
    var textDiv = document.createElement('div');
    textDiv.className = "popup-text";
    textDiv.innerHTML = planet.description;
    lowerSection.appendChild(textDiv);
    lowerSection.appendChild(pieChart);

    var nav = document.createElement('nav');
    nav.className = "popup-nav";
    nav.appendChild(imgButton);

    div.appendChild(upperSection);
    div.appendChild(lowerSection);
    div.appendChild(nav);

    popup.setContent(div);
    popup.display();
  });
};

function createButton(planet){
  var imgButton = document.createElement('img');
  imgButton.src = '../images/right_arrow.png';
  imgButton.width = 25;
  imgButton.addEventListener('click', function() {
    loadQuiz(planet, popup);
  })
  return imgButton;
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
