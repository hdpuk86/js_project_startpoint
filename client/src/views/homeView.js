var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var questionNumber;
var NameView = require('./nameView');

function addListeners(planet){
  var circle = document.getElementById(`circle_${planet.name}`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
  var nameDiv = document.getElementById(`${planet.name}_name_div`);
  var imgButton = createButton(planet);
  var pieChart = new PieCompView(planet);
  var name = new NameView(planet);
  name.className = "popup-title";
  hoverDiv.style.opacity = 0;
  hoverDiv.style.transition = 'opacity 1.0s linear';
  circle.addEventListener('mouseover', function(){
    hoverDiv.style.opacity = 1;
    hoverDiv.style.visibility = "visible";
    nameDiv.style.visibility = "visible";
  });
  circle.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
    hoverDiv.style.opacity = 0;
    nameDiv.style.visibility = 'hidden';
  });
  circle.addEventListener('click', () => {
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

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    div.appendChild(planetDiv);
    addListeners(planet);
  });
};

module.exports = HomeView;
