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

alert(`Thanks for playing ${userName}, your score is ${score}/7`);




