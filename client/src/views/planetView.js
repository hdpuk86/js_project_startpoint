function createCircle(pixelSize, colour){
  var div = document.createElement('div');
  div.style.borderRadius = '50%';
  div.style.width = pixelSize;
  div.style.height = pixelSize;
  div.style.backgroundColor = colour;
  return div;
};


var PlanetView = function(planet) {

};

module.exports = PlanetView;
