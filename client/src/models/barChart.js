var Highcharts = require('highcharts');

var BarChart = function(container, title, categories, series){
  var chart = new Highcharts.Chart({
    chart: {
      backgroundColor: "black",
      type: "column",
      renderTo: container,

    },
    title: {
      text: title,
      style: {
        "fontFamily": "Wire One",
        "color": "#FFFFFF",
        "fontSize": "3em"
      },
      text: title
    },
    xAxis: {
      categories: categories
    },
    yAxis: {
      max: 5
    },
    legend: {
      enabled: false
    },
    series: series
  });
};

module.exports = BarChart;
