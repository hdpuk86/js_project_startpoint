var PlanetView = function(planet) {
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  li.innerText = planet.name;
  ul.appendChild(li);
  return ul;
};

module.exports = PlanetView;
