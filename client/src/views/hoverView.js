function createHoverDiv(planet){
  var div = document.createElement('div');
  div.style.visibility = "hidden";
  div.id = `hover_${planet.name}_div`;
  div.className = 'hover_planets_div';
  var ul = createPlanetStats(planet);
  div.appendChild(ul);
  return div;
};

function createPlanetStats(planet){
  var ul = document.createElement('ul');
  var day = document.createElement('li');
  day.innerText = "Day length: " + planet.dayLength;
  var year = document.createElement('li');
  year.innerText = "Year length: " + planet.yearLength;
  // -------Need to add mass and volumes to seeds ------
  // var mass = document.createElement('li');
  // mass.innerText = "Mass: " + planet.mass;
  // var volume = document.createElement('li');
  // volume.innerText = "Volume: " + planet.volume;
  // ul.appendChild(volume);
  // ul.appendChild(mass);
  ul.appendChild(day);
  ul.appendChild(year);
  return ul;
};

var HoverView = function(planet){
  return createHoverDiv(planet);
};

module.exports = HoverView;
