'use strict';

var score = 0;

// get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');

alert('Hello ' + userName + ', nice to meet you!');

var questionOne = prompt('Do I live in Seattle?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct');
  alert('you are correct');
  score++;
}

//question 6
var favoriteNumber = 42;
var attmeptsGiven  = 4;

for (var i  = 0; i < attmeptsGiven; i++) {
  var response = parseInt(prompt('please guess  my favorite number between 1 and 50'));

  if(response === favoriteNumber){
    alert('you are correct!  Good Job!');
    score++;
    break;
  } else if (response > favoriteNumber){
    alert('Sorry, that\'s too high');
  } else if (response < favoriteNumber){
    alert('Sorry, that\'s too low');
  } else {
    alert('please read the prompts and play along!');
  }

  if(i === 3){
    alert('Thanks for playing, my favorite number is 42');
  }
}

// question 7
var favoriteColors = ['scarlet', 'peacock', 'turquoise'];
var attemptsRemaining = 6;
var answeredCorrectly =  false;

while (attemptsRemaining && !answeredCorrectly){
  var userResponse = prompt(`you have ${attemptsRemaining} attempt(s) to guess one of my favorite colors.  What is your guess?`).toLowerCase();

  for (var j = 0; j < favoriteColors.length; j++) {
    if (userResponse === favoriteColors[j]){
      alert('That\'s correct, awesome job!');
      score++;
      answeredCorrectly = true;
    }
  }

  attemptsRemaining--;
  if(!attemptsRemaining){
    alert('my favorite colors are scarlet, turquoise, and peacock');
  }
}

alert(`Thanks for playing ${userName}, your score is ${score}/7`);




