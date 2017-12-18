var AdventurePlanet = require('./adventurePlanetView');
var Popup = require('./popupView');

function addListeners(planet){
  var circle = document.getElementById(`adventure_${planet.name}_circle`);
  var hoverDiv = document.getElementById(`hover_${planet.name}_adventure`);
  var nameDiv = document.getElementById(`${planet.name}_name_adventure`);
  var planetBtn = document.getElementById(`${planet.name}_button`);
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
  planetBtn.addEventListener('click', function(){
    smoothScroll(planet.distance+2500);
  })
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
    addListeners(planet);
  });
};

module.exports = AdventureView;
