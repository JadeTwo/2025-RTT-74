// variables for the different choices (number based)
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// keep track of score
let humanScore = 0;
let computerScore = 0;

// keep track of rounds
let currentRound = 1;

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

// creates an image of a rock, paper, or scissors
function createChoiceImage(choice, who) { // ROCK
    choice = choice.toLowerCase()
    // select the parent (span) and create a new img
    const span = document.getElementById(`${who}-choice-pic`)
    // remove old img
    const oldImg = span.lastChild
    if (oldImg) {
        span.removeChild(oldImg)
    }
    // create a new img
    const img = document.createElement('img')
    // add some attributes (src, alt)
    img.src = `./images/${choice}.png`
    img.setAttribute('alt', `picture of ${choice}`)
    span.appendChild(img)

    // span.textContent
    // span.innerHTML

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

    createChoiceImage(player, 'player')

    let computer;

    // show us what the computer
    if (computerChoice === ROCK) {
        computer = 'ROCK'
    } else if (computerChoice === PAPER) {
        computer = 'PAPER'
    } else {
        computer = 'SCISSORS'
    }

    createChoiceImage(computer, 'computer')

    // determine winner

    // check if tie
    if (playerChoice === computerChoice) {
        return `It's a tie! Both players chose ${player}`
    }

    // check if player wins
    if ((playerChoice > computerChoice) || (playerChoice === ROCK && computerChoice === SCISSORS)) {
        changeScore('player', 1)
        return `You win! ${player} beats ${computer}`
    }

    // check if computer wins
    if (playerChoice < computerChoice || playerChoice === SCISSORS) {
        changeScore('computer', 1)
        return `You lose! ${computer} beats ${player}`
    }

}

function changeScore(player, number) {
    
    // player is human in this case
    if (player === 'player') {
        // if number is 1 then increment otherwise its 0 
        humanScore = number ? humanScore + 1 : number

    // otherwise must be a computer
    } else {
        // if number is 1 then increment otherwise its 0 
        computerScore = number ? computerScore + 1 : number
    }

    // organize score with player (relate the two using an object)
    let playerObj = {
        player: humanScore,
        computer: computerScore
    }

    // select the div for that player (human or computer) and change the text
    const div = document.getElementById(`${player}-score`)
    div.textContent = playerObj[player]
}

// function playGame() {

//     for (let i = 1; i <= 3; i++) {
//         // store a chosen number between 1 and 3
//         let humanChoice = getHumanChoice();

//         // store a random number between 1 and 3
//         let computerChoice = getComputerChoice()

//         // play one of three rounds of the game
//         const result = playRound(humanChoice, computerChoice);

//         // show the result (win, loss, tie)
//         console.log(result);
//     }

//     // determine winner based on score 
//     if (humanScore > computerScore) {
//         return "You win the game!"
//     } else if (computerScore > humanScore) {
//         return "You lose the game! Bro... in 2026?"
//     } else {
//         return "Tie. Boring!"
//     }

// }

function determineWinner() {
    if (humanScore > computerScore) {
        return "You win the game!"
    } else if (computerScore > humanScore) {
        return "You lose the game! Bro... in 2026?"
    } else {
        return "Tie. Boring!"
    }
}



// select the div with the three buttons (rock, paper, scissors)
const div = document.getElementById('buttons')

// select the div with the "play again" button
const playAgainDiv = document.getElementById('play-again-container')

// add the event listener
div.addEventListener('click', (e) => {



    // select the target button
    const element = e.target

    // check if the element is actually a button
    if (element.id === 'rock' || element.id === 'paper' || element.id === 'scissors') {

        // making a connection between the string "rock" and the number 1
        const choices = {
            'rock': 1,
            'paper': 2,
            'scissors': 3
        }

        // use the element's id to get the corresponding number for the player choice
        const playerChoiceNumber = choices[element.id]

        // randomly generate our computer choice and return the number
        const computerChoiceNumber = getComputerChoice()

        // pass the numbers to the playRound function
        const winLossOrTie = playRound(playerChoiceNumber, computerChoiceNumber)

        // increment the round and change round in DOM
        currentRound++
        const span = document.getElementById('round')
        span.textContent = currentRound

        // show the win, loss, or tie message
        const h2 = document.querySelector('h2')
        h2.textContent = winLossOrTie

        // for readability 
        const GAME_OVER = currentRound === 4

        // check number of rounds to see if the game is over
        if (GAME_OVER) {
            // select the div with the buttons and hide it
            div.classList.add('hide');

            // determine winner and return winning or losing message
            const message = determineWinner();

            // select the h3 and adding a custom message (replacing "Round 1 of 3")
            const h3 = document.querySelector('h3');
            h3.textContent = message;

            // select the div with the play again button
            playAgainDiv.classList.remove('hide')
            return
        }
        // Click ROCK:

        // Show image of a ROCK for player
    }
})

console.dir(document.querySelector('h3'))

playAgainDiv.addEventListener('click', (e) => {
    
    // reset scores at the top
    changeScore('player', 0);
    changeScore('computer', 0);

    // reset the win/loss messages
    const h2 = document.querySelector('h2')
    h2.textContent = "Choose Your Weapon:"

    // images of choices
    const imgs = document.querySelectorAll('img')

    // remove both images
    for (let img of imgs) {
        img.remove();
    }

    // // remove the message in the h3
    const h3 = document.querySelector('h3')
    h3.textContent = ''

    // // first part of the message
    const roundMsg = document.createTextNode('Round ')

    // // replace the span with id round 
    const newSpan = document.createElement('span')
    newSpan.id = 'round'
    
    // // last part of message
    const ofMsg = document.createTextNode(' of 3')

    // // reset the rounds (variable and the message)
    currentRound = 1
    newSpan.textContent = currentRound

    // // add new span to DOM (h3)
    h3.appendChild(roundMsg);
    h3.appendChild(newSpan);
    h3.appendChild(ofMsg);

    // another version (instead of 251-272)
    // const h3 = document.querySelector('h3')
    // h3.innerHTML = 'Round <span id="round">1</span> of 3'
    // currentRound = 1
    
    
    // change the buttons
    div.classList.remove('hide');
    playAgainDiv.classList.add('hide');

})



