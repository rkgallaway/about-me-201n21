'use strict';

var score = 0;

// get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');

alert('Hello ' + userName + ', nice to meet you!');

function questionOne(){
  var answerOne = prompt('Do I live in Seattle?').toLowerCase();
  
  if(answerOne === 'yes' || answerOne === 'y') {
    // console.log('you are correct');
    alert('you are correct');
    score++;
  }
}

questionOne();

alert(`Thanks for playing ${userName}, your score is ${score}/7`);




