// JavaScript logic for the game

// Variables to keep track of the random number, the user's guess, and the number of attempts
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

// Function to check the user's guess
function checkGuess() {
  let userGuess = parseInt(document.getElementById('guess-input').value);
  guesses++;
  let message = '';

  if (userGuess === randomNumber) {
    message = `Congratulations! You guessed the right number in ${guesses} attempts!`;
    document.getElementById('reset-btn').style.display = 'inline';
  } else if (userGuess < randomNumber) {
    message = 'Too low!';
  } else if (userGuess > randomNumber) {
    message = 'Too high!';
  } else {
    message = 'Please enter a valid number.';
  }

  document.getElementById('message').textContent = message;
}

// Event listener for the 'Guess' button
document.getElementById('guess-btn').addEventListener('click', checkGuess);

// Function to reset the game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  document.getElementById('guess-input').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('reset-btn').style.display = 'none';
}

// Event listener for the 'Play Again' button
document.getElementById('reset-btn').addEventListener('click', resetGame);
