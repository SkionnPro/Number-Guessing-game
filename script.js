"use strict";
function getByID(id){
    return document.getElementById(id);
}
var msg1 = getByID("message1");
var msg2 = getByID("message2");
var msg3 = getByID("message3");

var answer = Math.floor(Math.random()*100 + 1);
var guessAttempt = 0;
var guessedNumbers = [];

function play(){
    var userGuess = getByID("guess").value;
    if(userGuess < 1 || userGuess > 100){
        alert("Please enter a number between 1 and 100");
    }else{
        guessedNumbers.push(userGuess);
        guessAttempt++;
        if(userGuess < answer){
            msg1.textContent = "Your Guess is too low.";
            msg2.textContent = "Number of Guesses: " + guessAttempt;
            msg3.textContent = "Guessed Numbers are: " + guessedNumbers;
        }
        if(userGuess > answer){
            msg1.textContent = "Your Guess is too High.";
            msg2.textContent = guessAttempt;
            msg3.textContent = "Guessed Numbers are: " + guessedNumbers;
        }
        if(userGuess == answer){
            msg1.textContent = "You Win!";
            msg2.textContent = "You guessed the answer in " + guessAttempt + " chances";
            msg3.textContent = " ";
            getByID("submitButton").disabled = true;
        }
    }
}