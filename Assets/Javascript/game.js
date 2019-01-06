    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var maximum tries = 5;
    var wins = 0;
    var losses = 0;
    var guesses = 0;


    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guessesleft-text");
    var yourguessesText = document.getElementById("yourguesses-text");

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var i = 0; i < letters.length; i++) {

        letters [i] = "_";

    }

  
     document.onkeyup = function(event) {

            var userGuess = event.key;
      
            var computerGuess = letters[Math.floor(Math.random() * letters.length)];

            remainingLetters--;


    if (userGuess === computerGuess) {
        wins++;
    }
    else if (userGuess !== computerGuess) {
        losses++;
    }


            userChoiceText.textContent = "You chose: " + userGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessesText.textContent = "guesses: " + guesses;
            yourguessesText.textContent = "your guesses: " + letters [i];
        }



