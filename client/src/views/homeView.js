var PlanetView = require('./planetView');
var Popup = require('./popupView');
var Quiz = require('./quizView');
var PieCompView = require('./pieCompView');


function addListeners(planet){
  var circle = document.getElementById(`circle_${planet.name}`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
  var nameDiv = document.getElementById(`${planet.name}_name_div`);
  var imgButton = createButton();
  var pieChart = new PieCompView(planet);
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
    var popup = new Popup();
    var newContent = planet.youtubeEmbed + planet.description + pieChart.innerHTML +imgButton.outerHTML;
    popup.setContent(newContent);
    popup.display();
  });

};

function createButton(){
  var imgButton = document.createElement('img');
  imgButton.src = '../images/right_arrow.png';
  imgButton.width = 25;
  imgButton.addEventListener('click', function(){
    console.log('click');
  })
  return imgButton;
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
