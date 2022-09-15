const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

function playerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(choices.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
};

function playRound(playerSelection, computerSelection) {
    const results = checkWinner(playerSelection, computerSelection);
    if (results == "Tie") {
        return "It's a Tie!";
    } else if (results == "Player won!") {
        playerScore++;
        return `The player has won with ${playerSelection} against ${computerSelection}`;
    } else {
        computerScore++;
        return `Computer has won! They chose ${computerSelection}`;
    }
};

function game() {
    console.log("Welcome to Rock Paper Scissors!")
    console.log("---------------------------------------------------------------------")
    for (i = 1; i <= 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if(playerSelection === computerSelection){
            console.log(`Tie`);
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
            console.log(`Round ${i} Player: ${playerScore} | Computer: ${computerScore}`);
            console.log("---------------------------------------------------------------------")
        }else {
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
            console.log(`Round ${i} Player: ${playerScore} | Computer: ${computerScore}`);
            console.log("---------------------------------------------------------------------")
        }
    }
    console.log("Game Over!");
    if(playerScore > computerScore) {
        console.log("Player is the winner!")
    } else if(playerScore < computerScore) {
        console.log("Computer was the winner!")
    } else {
        console.log("It was a tie!")
    }
    gameOver();
};


function checkWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return 'Tie';
    } else if (
        (choicePlayer === 'rock' && choiceComputer === "scissors") ||
        (choicePlayer === 'paper' && choiceComputer === "rock") ||
        (choicePlayer === 'scissors' && choiceComputer === "paper")
    ) {
        return "Player won!";
    } else {
        return "Computer won!";
    }
};

function gameOver() {
    playerScore = 0;
    computerScore = 0;
}

console.log(game());














































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