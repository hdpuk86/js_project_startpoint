function createPlanetDiv(planet){
  var div = document.createElement('div');
  div.id = `home_${planet.name}_div`;
  div.class = 'home_planets_div';

  var circleDiv = createCircle(planet.homepageRadius +'px', planet.colour);

  div.appendChild(circleDiv);
  return div;
};



function createCircle(pixelSize, colour){
  var div = document.createElement('div');
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
