const computerChoices = ['ROCK', 'PAPER', 'SCISSORS'];


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);

    console.log(computerChoices[random]);
    return computerChoices[random];
};

function playRound(playerSelection, computerSelection){
    playerSelection.toUpperCase();

    if(playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Lose! Paper beats Rock!";
    } else if(playerSelection === "PAPER" && computerSelection === "SCISSOR" || playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        return "Let's Go! Scissor beats Paper!"
    } else if(playerSelection === "SCISSOR" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        return "Scissors can't cut a Rock! You Lost!";
    } else {
        return "Hey! You copied me!";
    }
};

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));















































// First Attempt at Rock Paper Scissors

// let playerScore = 0;
// let computerScore = 0;

// function computerPlay() {
//     const choices = ['ROCK', 'SCISSORS', 'PAPER'];

//     const random = choices[Math.floor(Math.random() * choices.length)];
//     return random;
// }

// function playRound(playerSelection, computerSelection) {
//     if(playerSelection === computerSelection) {
//         return 'tie';
//     }

//     if (
//         (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
//         (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
//         (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
//     ) {
//         playerScore++;
//         return `Great Job! ${playerSelection} beats ${computerSelection}`;
//     }

//     if(
//         (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
//         (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
//         (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
//     ) {
//         computerScore++;
//         return 'Oh no.. the bot won.';
//     }
// }

// function game() {
//     playRound(playerSelection, computerSelection);
//     console.log(playerScore)
//     console.log(computerScore)
//     playRound(playerSelection, computerSelection);
//     console.log(playerScore)
//     console.log(computerScore)
//     playRound(playerSelection, computerSelection);
//     console.log(playerScore)
//     console.log(computerScore)
//     playRound(playerSelection, computerSelection);
//     console.log(playerScore)
//     console.log(computerScore)
//     playRound(playerSelection, computerSelection);
//     console.log(playerScore)
//     console.log(computerScore)

//     if (playerScore === 5) {
//         return `With a score of ${playerScore}.. They are the winners`;
//     }
//     if (computerScore === 5) {
//         return `The bot won with ${computerScore} points..`;
//     }
//     if (playerScore === 0 && computerScore === 0) {
//         return 'it\'s a tie'
//     }
// }

// let playerPlay = prompt('Time to play Rock, Paper, Scissors! ');
// const playerSelection = playerPlay.toUpperCase();
// const computerSelection = computerPlay();
// // console.log(playRound(playerSelection, computerSelection)); 
// console.log(game());