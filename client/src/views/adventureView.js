var AdventurePlanet = require('./adventurePlanetView');
var Popup = require('./popupView');

function addAllListeners(planet){
  var circle = document.getElementById(`adventure_${planet.name}_circle`);
  var nameDiv = document.getElementById(`${planet.name}_name_adventure`);
  var planetBtn = document.getElementById(`${planet.name}_button`);

  addHoverListener(planet, circle);
  addHoverListener(planet, nameDiv);

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
  div.addEventListener('click', () => {
    var popup = new Popup();
    var newContent = planet.youtubeEmbed + planet.description;
    popup.setContent(newContent);
    popup.display();
  });
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
