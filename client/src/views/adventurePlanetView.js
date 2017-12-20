var NameView = require('./nameView');
var HoverView = require('./hoverView');

function createPlanetDiv(planet){
  var div = document.createElement('div');
  div.id = `adventure_${planet.name}_div`;
  div.className = 'adventure_planets_div';

  var img = document.createElement('img');
  img.src = '../images/arrow.png';
  img.id = 'arrow';

  var nameDiv = new NameView(planet);
  nameDiv.id = `${planet.name}_name_adventure`;
  nameDiv.className = 'name_adventure';
  nameDiv.appendChild(img);
  div.appendChild(nameDiv);

  var circleDiv = createCircle(planet.radius +'px', planet.colour);
  circleDiv.id = `adventure_${planet.name}_circle`;
  div.appendChild(circleDiv);

  var blowUpBtn = document.createElement('button');
  blowUpBtn.innerText = 'DESTROY';
  blowUpBtn.style.visibility = 'hidden';
  blowUpBtn.id = `${planet.name}-destroy`;
  div.appendChild(blowUpBtn);

  var hoverDiv = new HoverView(planet);
  hoverDiv.id = `hover_${planet.name}_adventure`;
  hoverDiv.className = 'hover_planets_adventure';
  div.appendChild(hoverDiv);

  div.style.marginLeft = `${planet.distanceFromLast}px`;
  return div;
};

function createCircle(pixelSize, colour){
  var div = document.createElement('div');
  div.className = 'circle adventure_planet';
  div.style.width = pixelSize;
  div.style.height = pixelSize;
  div.style.backgroundColor = colour;
  return div;
};

var AdventurePlanet = function(planet) {
  return createPlanetDiv(planet);
};

module.exports = AdventurePlanet;
