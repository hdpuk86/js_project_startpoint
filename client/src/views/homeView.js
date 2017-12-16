var PlanetView = require('./planetView');
var HoverView = require('./hoverView');
var Popup = require('./popupView');

function addListeners(planet){
  var circle = document.getElementById(`circle_${planet.name}`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
  circle.addEventListener('mouseover', function(){
    hoverDiv.style.visibility = "visible";
  });
  circle.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
  });
  circle.addEventListener('click', () => {
    var popup = new Popup();
    var newContent = planet.youtubeEmbed + planet.description;
    popup.setContent(newContent);
    popup.display();
  });
};

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    var hoverDiv = new HoverView(planet);
    planetDiv.appendChild(hoverDiv);
    div.appendChild(planetDiv);
    addListeners(planet);
  });
};

module.exports = HomeView;

