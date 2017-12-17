//creates the info div and appends all planet stats
function createHoverDiv(planet){
  var div = document.createElement('div');
  div.style.visibility = "hidden";
  var ul = createPlanetStats(planet);
  div.appendChild(ul);
  return div;
};

//appends the planet stats to a ul
function createPlanetStats(planet){
  var ul = document.createElement('ul');
  var day = document.createElement('li');
  day.innerText = "Day length: " + planet.dayLength + " (hours)";
  var year = document.createElement('li');
  year.innerText = "Year length: " + planet.yearLength + " (Earth days)";
  var mass = document.createElement('li');
  mass.innerText = "Mass: " + planet.mass  + " (Earths)";
  var volume = document.createElement('li');
  volume.innerText = "Volume: " + planet.volume + " (Earths)";
  ul.appendChild(volume);
  ul.appendChild(mass);
  ul.appendChild(day);
  ul.appendChild(year);
  return ul;
};

var HoverView = function(planet){
  return createHoverDiv(planet);
};

module.exports = HoverView;
