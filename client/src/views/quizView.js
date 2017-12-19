var Popup = require('./popupView');
var Quiz = require('./quizView');
var QuizResultChart = require('./quizResultChartView');

// This is the paragraph where the result of the chosen answer is held
var pResult = document.createElement('p');

var correctResult = function() {
  pResult.innerText = 'Correct'
  pResult.style.color = 'green';
}

var incorrectResult = function() {
  pResult.innerText = 'Incorrect'
  pResult.style.color = 'red';
}

var checkRadioAnswer = function(element, correctAnswer, quizScore){
  disableRadioBtns();
  colourLabels(correctAnswer);
  if (element.value == correctAnswer) {
    correctResult();
    quizScore++;
  } else {
    incorrectResult();
  }
  return quizScore;
}

function disableRadioBtns(){
  [...document.getElementsByTagName('input')].forEach((button) => {
    button.disabled = true;
  });
};

function colourLabels(correctAnswer){
  [...document.getElementsByTagName('label')].forEach((label) => {
    var p = null;
    for (var i = 0; i < label.childNodes.length; i++) {
      if (label.childNodes[i].className == "answer-text") {
        p = label.childNodes[i];
        break;
      }
    }
    p.style.color = p.innerText == correctAnswer ? 'green':'grey';
  });
}

function getQuizScoreFromStorage(planet){
  var jsonString = localStorage.getItem(`${planet.name}QuizResult`);
  return jsonString ? JSON.parse(jsonString) : 0;
};

function saveQuizScoreToStorage(planet, newQuizScore){
  var jsonString = JSON.stringify(newQuizScore);
  localStorage.setItem(`${planet.name}QuizResult`, jsonString);
};

function getAllQuizScoresFromStorage(){
  var jsonString = localStorage.getItem('AllQuizResults');
  if (jsonString) {
    return JSON.parse(jsonString);
  } else {
    return [
      {y:0, color:'#fde301'},
      {y:0, color:'#ffcc00'},
      {y:0, color:'#86ffca'},
      {y:0, color:'#01fdfa'},
      {y:0, color:'grey'},
      {y:0, color:'#ff7443'},
      {y:0, color:'#ffa043'},
      {y:0, color:'#f9d293'},
      {y:0, color:'#18E6FF'},
      {y:0, color:'#45B9FF'},
      {y:0, color:'#D9F5FF'},
    ];
  }
};

function saveFinalQuizResultToLocalStorage(planet){
  var finalScore = getQuizScoreFromStorage(planet);
  var allQuizResults = getAllQuizScoresFromStorage();
  allQuizResults[planet.index].y = finalScore;
  localStorage.setItem('AllQuizResults', JSON.stringify(allQuizResults));
};

function resetLocalStorageIfTakenBefore(planet){
  if (getQuizScoreFromStorage(planet) !== 0) {
    saveQuizScoreToStorage(planet, 0);
  }
}

var setRadioButton = function(input, answer, planet, question) {
  input.setAttribute('type', 'radio');
  input.setAttribute('name', planet.name);
  input.setAttribute('value', answer);
  input.class = 'radioAnswers';
  input.addEventListener('click', function(){
    var quizScore = getQuizScoreFromStorage(planet);
    var newQuizScore =
    checkRadioAnswer(input, question.correctAnswer, quizScore);
    saveQuizScoreToStorage(planet, newQuizScore);
  });
};

var populateUl = function(answer, ul, planet, question) {
  var li = document.createElement('li');
  var questionInput = document.createElement('input');
  questionInput.className = "quiz-radio-btn";
  var label = document.createElement('label');
  label.className = "answer-labels";
  var p = document.createElement('p');
  p.className = "answer-text";
  p.innerText = answer;

  setRadioButton(questionInput, answer, planet, question);

  label.appendChild(questionInput);
  label.appendChild(p);
  li.appendChild(label);
  ul.appendChild(li);
};

var shuffle = function(array) {
  var i, j, x;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

function questionPageTop(planet, question){
  var quizName = document.createElement('div');
  quizName.className = "quiz-name";
  var pQuizName = document.createElement('p');
  pQuizName.innerText = `${planet.name} Quiz`;
  pQuizName.style.color = planet.colour;
  quizName.appendChild(pQuizName);

  var pQuestion = document.createElement('p');
  pQuestion.innerText = question.question;

  var topSection = document.createElement('section');
  topSection.className = "quiz-top";
  topSection.appendChild(quizName);
  topSection.appendChild(pQuestion);
  return topSection;
}

function questionPageMid(planet, question, questionNumber){
  var ul = document.createElement('ul');
  var answers = shuffle(question.allAnswers);
  answers.forEach((answer) => populateUl(answer, ul, planet, question));
  var quizFieldSet = document.createElement('fieldset').appendChild(ul);
  quizFieldSet.className = "quiz-fieldset";

  var nextQuestion = document.createElement('img');
  nextQuestion.className = "next-Q-img";
  nextQuestion.src = '../images/right_arrow.png';
  nextQuestion.height = 25;
  nextQuestion.addEventListener('click', function(){
    questionNumber++;
    popup.setContent(new Quiz(planet, popup, questionNumber));
  });
  var midSection = document.createElement('section');
  midSection.className = "quiz-mid";
  midSection.appendChild(quizFieldSet);
  midSection.appendChild(nextQuestion);
  return midSection;
};

function questionPageLow(planet, questions, questionNumber){
  pResult.innerText = '';
  var pQCounter = document.createElement('p');
  pQCounter.innerText = ` ${questionNumber+1} of ${questions.length}`;
  var lowSection = document.createElement('section');

  lowSection.className = "quiz-low";
  lowSection.appendChild(pResult);
  lowSection.appendChild(pQCounter);
  return lowSection;
}

function buildQuestionPage(planet, popup, questionNumber){
  var questions = planet.quiz.questions;
  var question = questions[questionNumber];

  var topSection = questionPageTop(planet, question);
  var midSection = questionPageMid(planet, question, questionNumber);
  var lowSection = questionPageLow(planet, questions, questionNumber);

  var quizDiv = document.createElement('div');
  quizDiv.appendChild(topSection);
  quizDiv.appendChild(midSection);
  quizDiv.appendChild(lowSection);

  return quizDiv;
}

function buildResultPage(planet, popup, results){
  var pQuizName = document.createElement('p');
  pQuizName.innerText = `${planet.name} Quiz Result`;

  var pYouScored = document.createElement('p')
  pYouScored.innerText = "You Scored...";

  var quizScore = getQuizScoreFromStorage(planet);
  var pQuizScore = document.createElement('p');
  pQuizScore.innerText = `${quizScore} out of ${planet.quiz.questions.length}`;

  var barChart = new QuizResultChart(results);

  var quizDiv = document.createElement('div');
  quizDiv.appendChild(pQuizName);
  quizDiv.appendChild(pYouScored);
  quizDiv.appendChild(pQuizScore);
  quizDiv.appendChild(barChart);

  return quizDiv;
}

var Quiz = function(planet, popup, questionNumber){
  if (questionNumber === 0){
    resetLocalStorageIfTakenBefore(planet);
    return buildQuestionPage(planet, popup, questionNumber);
  } else if (questionNumber < planet.quiz.questions.length) {
    return buildQuestionPage(planet, popup, questionNumber);
  } else {
    saveFinalQuizResultToLocalStorage(planet);
    var results = getAllQuizScoresFromStorage();
    return buildResultPage(planet, popup, results);
  }
}

module.exports = Quiz;
