//This game was intended to have an auto timer(30seconds) and with the screen exploding after 30seconds.
//The whole point of this game is to confuse you and have the screen explode without you completing the game.
//This is the MVP as I could not get the timer to work.
//Doesn't matter what score you get because no matter how many times you play this, you only might have won.
var questionList = [
  {
    question: 'Cat',
    choices: ['Is a cat and friend of Harry', 'Is a cat and a friend of Mary', 'Is my pet rat', 'Is a cat of a cat'],
    correctAnswer: 2
  },
  {
    question: 'Tac is',
    choices: ['a cat', 'a rat', 'a mat', 'a cap'],
    correctAnswer: 0
  },
  {
    question: 'Who is Mary?',
    choices: ['Kelly', 'Nelly', 'Sally', 'Harry'],
    correctAnswer: 3
  },
  {
    question: 'What does Tac like to do',
    choices: ['Eat and meow', 'Run away from home meowing', 'Meow and run away from home', 'Meow'],
    correctAnswer: 1
  },
  {
    question: 'If Sally is Kelly and Kelly is Sally, is Sally Kelly or is Kelly Sally?',
    choices: ['Sally was Sally', 'Kelly was Sally', 'Nelly was really Kelly', 'Sally was really Nelly'],
    correctAnswer: 0
  },
  {
    question: 'If Gary is really Larry, is Barry, Mary?',
    choices: ['Yes but no', 'No but yes', 'Maybe yes', 'Maybe no'],
    correctAnswer: 1
  },
  {
    question: 'Since Sally was really Nelly, is Nelly really Sally?',
    choices: ['Yes but no', 'No but yes', 'Maybe yes', 'Maybe no'],
    correctAnswer: 2
  },
  {
    question: 'A cat in a hat on your lap with a cap as you read a map is',
    choices: ['None of the options', 'A cat in a hat on your lap', 'A cat in a hat on your lap with a cap with you reading a map', 'A cat in a hat wearing a hat'],
    correctAnswer: 0
  },
  {
    question: 'Sally was really',
    choices: ['Kelly and Larry and Barry', 'Barry and Gary and Nelly', 'Gary and Larry and Barry', 'Harry and Marry and Barry'],
    correctAnswer: 3
  },
  {
    question: 'And Tac was',
    choices: ['her cat', 'that cat', 'a cat', 'my cat'],
    correctAnswer: 1
  }
];

var currentPlayer = 1;
var player1score = 0;
var player2score = 0;
var currentQuestionRound = 0;

$(document).ready(function () {
  restart();

  $('#0').hover(function () {
    $('#0').css("background-color", "#1aff1a");
    }, function () {
    $('#0').css("background-color", "black");
  });
  $('#1').hover(function () {
    $('#1').css("background-color", "#1aff1a");
    }, function (){
    $('#1').css("background-color", "black");
  });
  $('#2').hover(function () {
    $('#2').css("background-color", "#1aff1a");
    }, function(){
    $('#2').css("background-color", "black");
  });
  $('#3').hover(function () {
    $('#3').css("background-color","#1aff1a");
    }, function () {
    $('#3').css("background-color", "black");
});

  $('#0').click(function (event) {
    playTurn(0);
  });
  $('#1').click(function (event) {
    playTurn(1);
  });
  $('#2').click(function (event) {
    playTurn(2);
  });
  $('#3').click(function (event) {
    playTurn(3);
  });
  function restartCicked () {
  console.log('restart clicked');
    restart();
  }
  $('#restart').click( restartCicked );
});
//
// $('button').click(function(){
//   $('h1').animate({"right":  "+=1000px"}, 0)})

//   }
// }
// It should return an integer that is the number of questions in a game
function numberOfQuestions () {
  return questionList.length;
}

// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion(){
  return currentQuestionRound;
}

// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer(){
  var currentQ = questionList[currentQuestionRound];
  return currentQ.correctAnswer;
}

function numberOfAnswers(){
  return 4;
}
// It should return an integer that is the number of choices for the current question

// check if playTurn(choice)===correctAnswer for currentQuestion
// if yes(true), player1score++
// else return false
// prompt next question
// switch player

function playTurn(choice) {
  if(isGameOver()) {
    console.log('finished!');
    console.log(player1score);
    console.log(player2score);
    return false;
  }
  if (choice === questionList[currentQuestion()].correctAnswer) {
    if (currentPlayer === 1) {
      player1score++;
      currentPlayer = 2;
    } else {
      player2score++;
      currentPlayer = 1;
    }
    currentQuestionRound++;
    if (isGameOver() === false) {
      $('h1').text(questionList[currentQuestion()].question);
      $('#0').text(questionList[currentQuestion()].choices[0]);
      $('#1').text(questionList[currentQuestion()].choices[1]);
      $('#2').text(questionList[currentQuestion()].choices[2]);
      $('#3').text(questionList[currentQuestion()].choices[3]);
      $('#Player1Score').text("Player 1 Score "+player1score);
      $('#Player2Score').text("Player 2 Score "+player2score);
    }
    return true;
  } else {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
    currentQuestionRound++;
    if (isGameOver() === false) {
      $('h1').text(questionList[currentQuestion()].question);
      $('#0').text(questionList[currentQuestion()].choices[0]);
      $('#1').text(questionList[currentQuestion()].choices[1]);
      $('#2').text(questionList[currentQuestion()].choices[2]);
      $('#3').text(questionList[currentQuestion()].choices[3]);
      $('#Player1Score').text("Player 1 Score "+player1score);
      $('#Player2Score').text("Player 2 Score "+player2score);
    }
    return false;
  }

}
// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.

function isGameOver () {
  if (currentQuestion() === questionList.length) {
    window.alert('Youre a wizard Hary! Maybe you won!!!');
    return true;
  }
  return false;
}
// It should return a true or false if the quiz is over.

function whoWon(){
  if (isGameOver()) {
    if (player1score > player2score) {
      return 1;
    } else if (player2score > player1score) {
      return 2;
    } else if (player1score === player2score) {
      return 3;
    }
  }
  return 0;
}

// if(whoWon() === 1) {
//         window.alert('Player 1 win!');
//       } else (whoWon() === 2)
//         window.alert('Player 2 win!');
//       } else (player1score === player2score)
//         window.alert('Its a draw!');
// It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.

function restart(){
  currentQuestionRound = 0;
  player1score = 0;
  player2score = 0;
  currentPlayer = 1;
  $('h1').text(questionList[0].question);
  $('#0').text(questionList[0].choices[0]);
  $('#1').text(questionList[0].choices[1]);
  $('#2').text(questionList[0].choices[2]);
  $('#3').text(questionList[0].choices[3]);
  $('#Player1Score').text('Player 1 Score '+player1score);
  $('#Player2Score').text('Player 2 Score '+player2score);
}
// It should restart the game so it can be played again.

// ##ASSUMPTIONS
// It is assumed that the turns of the player will be automatically changed after each turn.
//
// The application will console log all the passed or failed test
