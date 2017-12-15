var PlanetView = require('./planetView');

var HomeView = function(planets) {
  var div = document.getElementById('planets-div');
  planets.forEach((planet) => {
    var ul = new PlanetView(planet);
    div.appendChild(ul);
  });
};

module.exports = HomeView;
