var Quiz = function(planet){
  // Creates an array of divs, one for each question in the quiz
  var questionDivs = [];
  // Get all questions in quiz
  var questions = planet.quiz.questions;
  questions.forEach(function(question){
    // Create quiz div
    var quizDiv = document.createElement('div');
    // Add Quiz name paragraph
    var pQuizName = document.createElement('p');
    pQuizName.innerText = `${planet.name} Quiz`;
    quizDiv.appendChild(pQuizName);
    // Add question text
    var pQuestion = document.createElement('p');
    pQuestion.innerText = question.question;
    quizDiv.appendChild(pQuestion);
    // Create fieldset to hold ul of radio buttons
    var quizFieldSet = document.createElement('fieldset');
    // create UL
    var ul = document.createElement('ul');
    // Get all answers
    var answers = question.allAnswers;
    // Create li, radio input and label for each answer
    answers.forEach(function(answer){
      var li = document.createElement('li');
      var questionInput = document.createElement('input');
      var label = document.createElement('label');
      label.innerText = answer;

      questionInput.setAttribute('type', 'radio');
      questionInput.setAttribute('name', question);
      questionInput.setAttribute('value', answer);

      label.appendChild(questionInput);
      li.appendChild(label);
      ul.appendChild(li);
      quizFieldSet.appendChild(ul);
    })
    quizDiv.appendChild(quizFieldSet);

    var imgButton = document.createElement('img');
    imgButton.src = '../images/right_arrow.png';
    imgButton.width = 25;
    quizDiv.appendChild(imgButton);

    questionDivs.push(quizDiv);
  })

  return questionDivs;
}

module.exports = Quiz;
