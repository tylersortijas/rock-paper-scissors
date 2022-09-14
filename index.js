let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSOR';
    }
};

function playRound(playerSelection, computerSelection){
    let result = ''

    if(playerSelection == computerSelection) {
        result = `You both chose ${playerSelection}`;
    } else if((playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
    (playerSelection == 'ROCK' && computerSelection == 'SCISSOR') ||
    (playerSelection == 'SCISSOR' && computerSelection == 'PAPER')) {
        playerScore++;
        result = "Player wins! The king of RPS!"
    } else {
        computerScore++;
        result = "The computer has won. You just got beaten by a bot!";
    }
    return result;
};

const playerSelection = prompt("choose.. rock paper scissors").toUpperCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for(let i=0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}















































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