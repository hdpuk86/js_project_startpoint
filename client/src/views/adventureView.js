var AdventurePlanet = require('./adventurePlanetView');
var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var questionNumber;

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
  div.addEventListener('click', () => {
    popup = new Popup();
    var div = document.createElement('div');
    var videoDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    videoDiv.innerHTML = planet.youtubeEmbed;
    textDiv.innerHTML = planet.description;
    div.appendChild(videoDiv);
    div.appendChild(textDiv);
    div.appendChild(pieChart);
    div.appendChild(imgButton);
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
