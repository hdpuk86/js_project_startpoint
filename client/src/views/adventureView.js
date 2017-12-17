var AdventurePlanet = require('./adventurePlanetView');

var AdventureView = function(planets) {
  var div = document.getElementById('planet_container');
  planets.forEach(function(planet){
    var planetDiv = new AdventurePlanet(planet);
    div.appendChild(planetDiv);
  });
};

module.exports = AdventureView;
