var Quiz = function(planet){
  // Create quiz div
  var quizDiv = document.createElement('div');

  // Add Quiz name paragraph
  var pQuizName = document.createElement('p');
  pQuizName.innerText = planet.name;

  // Add question

  var pQuestion = document.createElement('p');
  pQuestion.innerText = planet.quiz.question;

  // Create form element
  var quizForm = document.createElement('form');

  // Get the array of questions
  questions = planet.quiz.allAnswers;
  questions.forEach(function(question){
    // For each quetion add question radio buttons
    var questionInput = document.createElement('input');
    questionInput.SetAttribute('type', 'radio');
    questionInput.SetAttribute('name', question);
    questionInput.SetAttribute('value', question);

    quizForm.appendChild(questionInput);
  })

  // Add next button

}

module.exports = Quiz;
