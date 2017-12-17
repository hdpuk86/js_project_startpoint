var AdventurePlanet = require('./adventurePlanetView');
var Popup = require('./popupView');

function addListeners(planet){
  var circle = document.getElementById(`adventure_${planet.name}_circle`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_adventure`);
  var nameDiv = document.getElementById(`${planet.name}_name_adventure`);
  circle.addEventListener('mouseover', function(){
    hoverDiv.style.visibility = "visible";
    nameDiv.style.visibility = "visible";
  });
  circle.addEventListener('mouseleave', function(){
    hoverDiv.style.visibility = 'hidden';
    nameDiv.style.visibility = 'hidden';
  });
  circle.addEventListener('click', () => {
    var popup = new Popup();
    var newContent = planet.youtubeEmbed + planet.description;
    popup.setContent(newContent);
    popup.display();
  });
};

var AdventureView = function(planets) {
  var div = document.getElementById('planet_container');
  planets.forEach(function(planet){
    var planetDiv = new AdventurePlanet(planet);
    div.appendChild(planetDiv);
    addListeners(planet);
  });
};

module.exports = AdventureView;
