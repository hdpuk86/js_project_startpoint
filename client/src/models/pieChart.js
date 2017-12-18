var Highcharts = require('highcharts');

var PieChart = function(container, title, series){
  var chart = new Highcharts.Chart({
    chart: {
      backgroundColor: "black",
      type: "pie",
      renderTo: container,
      margin: [20, 20, 40, 20]
      // spacing: [20, 20, 40, 20]
    },
    title: {
      text: title,
      margin: 15,
      style: {
        "fontFamily": "Wire One",
        "color": "#FFFFFF",
        "fontSize": "3em"
      }
    },
    series: series,
    plotOptions: {
      pie: {
        size:'80%',
        dataLabels: {
          enabled: false
        }
      }
    },
    legend: {
      margin: 80,
      itemStyle: {
        "color": "#FFFFFF",
        "fontFamily": "Wire One",
        "fontSize": "2em"
      }
    }
  });
};

module.exports = PieChart;
