//creates the name div and appends text
function createNameDiv(planet){
  var div = document.createElement('div');
  div.style.visibility = "hidden";
  div.id = `${planet.name}_name_div`;
  div.className = 'hover_name_div';
  var p = createName(planet);
  div.appendChild(p);
  return div;
};

//renders planet name
function createName(planet){
  var p = document.createElement('p');
  p.innerText = planet.name;
  return p;
}

function nameView(planet){
  return createNameDiv(planet);
};

module.exports = nameView;
