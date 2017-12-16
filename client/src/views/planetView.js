var NameView = require('./nameView');
var HoverView = require('./hoverView');

function createPlanetDiv(planet){
  var div = document.createElement('div');
  div.id = `home_${planet.name}_div`;
  div.className = 'home_planets_div';

  var nameDiv = new NameView(planet);
  div.appendChild(nameDiv);

  var circleDiv = createCircle(planet.homepageRadius +'px', planet.colour);
  circleDiv.id = `circle_${planet.name}`;
  div.appendChild(circleDiv);

  var hoverDiv = new HoverView(planet);
  div.appendChild(hoverDiv);

  div.style.width = `${planet.homepageRadius + 30}px`;  
  return div;
};

function onLoad(){
  window.addEventListener('load', function(){
    addHoverListener(planet);
  });
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
