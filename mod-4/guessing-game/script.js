// Step 1: The Game State
let game = {
  secretNumber: Math.floor(Math.random() * 10) + 1,
  maxGuesses: 3,
  currentGuesses: 0,
};

// Step 2: Handle User Guesses
function makeGuess(guess) {

  // Step 3: Track Number of Guesses
  if (game.currentGuesses >= game.maxGuesses) {
    return "No more guesses left! Game over.";
  }

  game.currentGuesses++;
 
  if (guess === game.secretNumber) {
    return "Congratulations! You guessed the secret number.";
  } else if (guess > game.secretNumber) {
    return "Too high! Try again.";
  } else {
    return "Too low! Try again.";
  }
}