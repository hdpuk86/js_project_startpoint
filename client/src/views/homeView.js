var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');
var counter = 0;


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
    // div.appendChild(planet.youtubeEmbed.innerHTML);
    // div.appendChild(planet.description.innerHTML);
    div.appendChild(videoDiv);

    div.appendChild(pieChart);
    div.appendChild(imgButton);
    // var newContent = div
    // var newContent = new Quiz(planet)[0].outerHTML;
    popup.setContent(div);
    popup.display();
  });
};

function createButton(planet){
  var imgButton = document.createElement('img');
  imgButton.src = '../images/right_arrow.png';
  imgButton.width = 25;
  imgButton.addEventListener('click', function() {
    loadQuiz(planet);
  })
  return imgButton;
};

function loadQuiz(planet){
  var divs = new Quiz(planet);
  popup.setContent(divs[0]);
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
