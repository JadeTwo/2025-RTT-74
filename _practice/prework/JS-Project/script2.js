// variables for the different choices (number based)
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// keep track of score
let humanScore = 0;
let computerScore = 0;

// a function that returns rock, paper, or scissors at random
function getComputerChoice() {
    // return a number between 1 and 3
    return Math.floor(Math.random() * 3) + 1
}

function getHumanChoice() {
    let input = prompt("Make a choice: rock, paper, scissors");
    if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'r') {
        return 1
    } else if (input.toLowerCase() === 'paper' || input.toLowerCase() === 'p') {
        return 2
    } else if (input.toLowerCase() === 'scissors' || input.toLowerCase() === 's') {
        return 3
    } else {
        return getHumanChoice();
    }
}

function playRound(playerChoice, computerChoice) {

    let player;

    // show us what the player chose
    if (playerChoice === ROCK) {
        player = 'ROCK';
    } else if (playerChoice === PAPER) {
        player = 'PAPER';
    } else {
        player = 'SCISSORS';
    }

    let computer;

    // show us what the computer
    if (computerChoice === ROCK) {
        computer = 'ROCK'
    } else if (computerChoice === PAPER) {
        computer = 'PAPER'
    } else {
        computer = 'SCISSORS'
    }

    // determine winner

    // check if tie
    if (playerChoice === computerChoice) {
        return `It's a tie! Both players chose ${player}`
    }  

    // check if player wins
    if ((playerChoice > computerChoice) || (playerChoice === ROCK && computerChoice === SCISSORS)) {
        humanScore++
        return `You win! ${player} beats ${computer}`
    }

    // check if computer wins
    if (playerChoice < computerChoice || playerChoice === SCISSORS) {
        computerScore++
        return `You lose! ${computer} beats ${player}`
    }

}

function playGame() {

    for (let i = 1; i <= 3; i++) {
        // store a chosen number between 1 and 3
        let humanChoice = getHumanChoice();

        // store a random number between 1 and 3
        let computerChoice = getComputerChoice()

        // play one of three rounds of the game
        const result = playRound(humanChoice, computerChoice);

        // show the result (win, loss, tie)
        console.log(result);
    }

    // determine winner based on score 
    if (humanScore > computerScore) {
        return "You win the game!"
    } else if (computerScore > humanScore) {
        return "You lose the game! Bro... in 2026?"
    } else {
        return "Tie. Boring!"
    }
 
}

// play the game and output the result
console.log(playGame())

