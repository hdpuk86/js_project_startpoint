var Highcharts = require('highcharts');

var PieChart = function(container, title, series){
  var chart = new Highcharts.Chart({
    chart: {
      style: {
        fontFamily: 'Verdana',
        color: "white",
        fontSize: "20px"
      },
        backgroundColor: "black",
        type: "pie",
        renderTo: container,
        margin: [20, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
      },
      title: {
        text: title
      },
      series: series,
      plotOptions: {
        pie: {
          size:'80%',
          dataLabels: {
            enabled: true
          }
        }
      }
    });
  };

  module.exports = PieChart;
