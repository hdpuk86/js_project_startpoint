var PieChart = require('../models/pieChart.js');

function createPie(planet){
  var div = document.createElement('div');
  div.className = "gas-comp-pie";
  var title = planet.name + " Gas Compostion";
  var data = planet.composition;
  var series = [{
    name: "Gases",
    data: data
  }];
  var pie = new PieChart(div, title, series);
  return div;
};

var PieCompView = function(planet){
  return createPie(planet);
};

module.exports = PieCompView;
