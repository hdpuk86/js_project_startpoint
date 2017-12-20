//creates the name div and appends text
function createNameDiv(planet){
  var div = document.createElement('div');
  var p = createName(planet);
  p.className = "planetName";
  div.appendChild(p);
  return div;
};

//renders planet name
function createName(planet){
  var p = document.createElement('p');
  p.id = `${planet.name}_p`;
  p.innerText = planet.name.toUpperCase();
  p.style.color = planet.colour;
  return p;
}

function NameView(planet){
  return createNameDiv(planet);
};

module.exports = NameView;
