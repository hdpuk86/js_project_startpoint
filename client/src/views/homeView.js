var PlanetView = require('./planetView');

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var planetDiv = new PlanetView(planet);
    div.appendChild(planetDiv);
  });
};

module.exports = HomeView;
