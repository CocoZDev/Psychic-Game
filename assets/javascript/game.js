// Author: Guiyu (Zoey) Zhao
// Created: 6/27/2017

// Computer randomly choose a letter. Create an array that lists out all of the options (a-z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", 
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This line of JavaScript "grabs" the main div on the page;
var guessesSoFar = document.getElementById("guessesSoFar");
var guesses = document.getElementById("guessesLeftCount");
var wins = document.getElementById("winsCount");
var losses = document.getElementById("lossesCount");

// Creating variables to hold the number of wins, losses, and guesses left.
//Staring count numbers
var guesses = 5;
var wins = 0;
var losses = 0;  
var hasWon = false;  

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

	// Determines which key was pressed.
	var userGuess = event.key;

	console.log(hasWon);	

	// This logic determines the outcome of the game (win/loss), and increments the appropriate number
	// Compare user's guesses with the right answer
	// If win, the # of gueeses is reset to 0, and add 1 to wins
	if (userGuess === computerGuess && hasWon === false) {
		wins++;
		guesses = 0;
		hasWon = true;
		document.querySelector("#message").innerHTML = "You won!!! <br>You have gussed the right letter, <em><u>" + userGuess +"</u></em>. <br>To play again, just refresh this page.";
		console.log(hasWon);
	} 
	// Otherwise, number of guesses decrease by 1 as user type
	else {
		gameHistoryTracking();
		guesses--;
	}
	
	// //If Guess reaches 0, add 1 to losses
	if (guesses === 0) {
		guesses = 10;
		//has the user won if not increment losses
		if (!hasWon) {
			losses++;
		}
		//reset haswon so that for the next game it will start off as false
		hasWon = false;

	}

	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	// Set the inner HTML contents of the #game div to our html string  

	function gameHistoryTracking(){
		document.querySelector("#guessesSoFar").innerHTML = document.querySelector("#guessesSoFar").innerHTML + userGuess + ", ";
		document.querySelector("#guessesLeftCount").innerHTML = guesses;
		document.querySelector("#winsCount").innerHTML = wins;
		document.querySelector("#lossesCount").innerHTML = losses;
	};	
};


// Reveal the correct answer when user click on a button
document.querySelector("button").addEventListener("click", function(){

	var button = document.querySelector("button");
	var correctAnswer = "<p>Correct Answer: " + computerGuess + "</p>";

	// Add class to change style
	button.classList.add("pressed");
	setTimeout(function(){
		button.classList.remove("pressed");
	}, 100);
	
	// Show Message
	button.outerHTML += correctAnswer;
	console.log("Correct Answer: " + computerGuess);

});


// Bonus Event: Add a countdown timer