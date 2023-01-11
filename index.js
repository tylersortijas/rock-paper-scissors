const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const resultsDiv = document.querySelector('.results'); 


let player = document.querySelector("#playerScore");
player.textContent = `Player Score: ${playerScore}`;
let computer = document.querySelector("#computerScore");
computer.textContent = `Computer Score: ${computerScore}`;

let output = document.querySelector("#output");

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

function playerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        output.textContent = "Looks like it was a tie!"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        output.textContent = "Ouch! That Rock just slammed you!"
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        output.textContent = "Nice! Scissors cut Paper!"
        player.textContent = `Player Score: ${playerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        output.textContent = "Your Rock just got wrapped!"
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        output.textContent = "His Paper just got crushed by your Rock!"
        player.textContent = `Player Score: ${playerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        output.textContent = "You lost Scissors just ripped your Paper!"
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        output.textContent = "Your Paper just covered his Rock!"
        player.textContent = `Player Score: ${playerScore}`;
    }

    if(playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore) {
            output.textContent = "You won the game! Nice job! Play again!"
            gameOver();
        } else if (computerScore > playerScore) {
            output.textContent = "The Computer has got you beaten!"
            gameOver();
        } else {
            output.textContent = "It's a tie!?"
            gameOver();
        }
    }
};

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = choices[0];

    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = choices[1];

    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = choices[2];

    playRound(playerSelection, computerSelection);
});

// function game() {
    //     console.log("Welcome to Rock Paper Scissors!")
    //     console.log("---------------------------------------------------------------------")
//     for (i = 1; i <= 5; i++) {
//         const playerSelection = playerChoice();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         if (playerSelection === computerSelection) {
//             console.log(`Tie`);
//             console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
//             console.log(`Round ${i} Player: ${playerScore} | Computer: ${computerScore}`);
//             console.log("---------------------------------------------------------------------")
//         } else {
//             console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
//             console.log(`Round ${i} Player: ${playerScore} | Computer: ${computerScore}`);
//             console.log("---------------------------------------------------------------------")
//         }
//     }
//     console.log("Game Over!");
//     if (playerScore > computerScore) {
//         console.log("Player is the winner!")
//     } else if (playerScore < computerScore) {
//         console.log("Computer was the winner!")
//     } else {
//         console.log("It was a tie!")
//     }
//     gameOver();
// };

function gameOver() {
    playerScore = 0;
    player.textContent = `Player Score: ${playerScore}`;
    computerScore = 0;
    computer.textContent = `Computer Score: ${computerScore}`;
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