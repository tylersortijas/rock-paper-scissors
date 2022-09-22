const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const resultsDiv = document.querySelector('.results'); 
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
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = `You tied! You both picked ${playerSelection}`;
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You lost! Rock crushes Scissors'
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You won! Scissors cut paper';
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You lost Paper covers Rock';
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You won! Rock crushes Scissors';
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You lost! Scissors cut paper';
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        const currentScore = document.createElement('h3');
        currentScore.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        p.innerText = 'You won! Paper covers Rock';
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(currentScore);
    }

    if(playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore) {
            const winnerH1 = document.createElement('h1');
            winnerH1.innerText = "You are the winner of the game";
            resultsDiv.appendChild(winnerH1);
            gameOver();
        } else if (computerScore > playerScore) {
            const winnerH1 = document.createElement('h1');
            winnerH1.innerText = "You lost the game! Computer wins!";
            resultsDiv.appendChild(winnerH1);
            gameOver();
        } else {
            const winnerH1 = document.createElement('h1');
            winnerH1.innerText = "It was a tie!";
            resultsDiv.appendChild(winnerH1);
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
    computerScore = 0;
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