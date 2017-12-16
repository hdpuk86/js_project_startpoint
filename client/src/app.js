var HomeView = require('./views/homeView');
var Request = require('./request');
var Popup = require('./views/popupView');
var PlanetView = require('./views/planetView');

var onLoad = function() {
  new Request('/planets', HomeView);
  new Request('/planets', addHoverListener);
  popup = new Popup();
};

function addHoverListener(planets){
  planets.forEach(function(planet){
    var circle = document.getElementById(`circle_${planet.name}`);
    var hoverDiv = document.getElementById(`hover_${planet.name}_div`);
    circle.addEventListener('mouseover', function(){
      hoverDiv.style.visibility = "visible";
    });
    circle.addEventListener('mouseleave', function(){
      hoverDiv.style.visibility = 'hidden';
    });
  })
};

window.addEventListener('load', onLoad);
