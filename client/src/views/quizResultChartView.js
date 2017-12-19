var BarChart = require('../models/barChart.js');

function createQuizBarChart(quizResults){
  var div = document.createElement('div');
  div.className = "quiz-results-bar-chart";
  var title = "Quiz Results";
  var categories = ["Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
  var series = [{
      name: 'Planets',
      data: quizResults,
      color: "black"
  }];
  var chartQuiz = new BarChart(div, title, categories, series);
  return div;
}

var QuizResultChart = function(quizResults){
  return createQuizBarChart(quizResults);
};

module.exports = QuizResultChart;
