var NameView = require('./nameView');
var Hover = require('./hoverView');

function createPlanetDiv(planet){
  var div = document.createElement('div');
  div.id = `home_${planet.name}_div`;
  div.className = 'home_planets_div';

  var nameDiv = new NameView(planet);
  nameDiv.id = `${planet.name}_name_div`;
  nameDiv.className = 'hover_name_div';
  div.appendChild(nameDiv);

  var circleDiv = createCircle(planet.homepageRadius +'px', planet.colour);
  circleDiv.id = `circle_${planet.name}`;
  div.appendChild(circleDiv);

  var hoverDiv = new Hover(planet);
  div.appendChild(hoverDiv);
  hoverDiv.id = `hover_${planet.name}_div`;
  hoverDiv.className = 'hover_planets_div';

  div.style.width = `${planet.homepageRadius + 30}px`;
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

var PlanetView = function(planet) {
  return createPlanetDiv(planet);
};

module.exports = PlanetView;
