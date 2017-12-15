var PlanetView = require('./planetView');
var HoverDiv = require('./hoverView');

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    var hoverDiv = new HoverDiv(planet);
    planetDiv.appendChild(hoverDiv);
    div.appendChild(planetDiv);
  });
};

module.exports = HomeView;
