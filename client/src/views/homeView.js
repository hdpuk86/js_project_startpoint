var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var questionNumber;

function addListeners(planet){
  var circle = document.getElementById(`circle_${planet.name}`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
  var nameDiv = document.getElementById(`${planet.name}_name_div`);
  var imgButton = createButton(planet);
  var pieChart = new PieCompView(planet);
  circle.addEventListener('mouseover', function(){
    hoverDiv.style.visibility = "visible";
    nameDiv.style.visibility = "visible";
  });
  circle.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
    nameDiv.style.visibility = 'hidden';
  });
  circle.addEventListener('click', () => {
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

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    div.appendChild(planetDiv);
    addListeners(planet);
  });
};

module.exports = HomeView;
