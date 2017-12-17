var NameView = require('./nameView');
var Hover = require('./hoverView');

function createPlanetDiv(planet){
  var div = document.createElement('div');
  div.id = `adventure_${planet.name}_div`;
  div.className = 'adventure_planets_div';

  var nameDiv = new NameView(planet);
  div.appendChild(nameDiv); //change id

  var circleDiv = createCircle(planet.radius +'px', planet.colour);
  circleDiv.id = `adventure_${planet.name}_circle`;
  div.appendChild(circleDiv);

  var hoverDiv = new Hover(planet);
  div.appendChild(hoverDiv);

  return div;
};

function createCircle(pixelSize, colour){
  var div = document.createElement('div');
  div.className = "circle";
  div.style.borderRadius = '50%';
  div.style.width = pixelSize;
  div.style.height = pixelSize;
  div.style.backgroundColor = colour;
  return div;
};

var AdventurePlanet = function(planet) {
  return createPlanetDiv(planet);
};

module.exports = AdventurePlanet;
