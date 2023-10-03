const choices = ["Rock", "Paper", "Scissors"];


const buttons = document.querySelectorAll('button');

const div = document.querySelector('div');
const playerChoice = document.createElement('p');
const computerChoise = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const winner = document.createElement('p');
let playerPoints = 0;
let computerPoints = 0;

playerChoice.textContent = `players choice:`;
computerChoise.textContent = `computers choice:`;
playerScore.textContent = 'players score: 0';
computerScore.textContent = 'computers score: 0';



div.appendChild(playerChoice);
div.appendChild(computerChoise);
div.appendChild(playerScore);
div.appendChild(computerScore);
div.appendChild(winner);


buttons.forEach((button) => {
    let val = button.value;
    console.log(val);
    button.addEventListener('click', () => {
        playSingleRound(val, getComputerChoise());
    });
})


function playSingleRound(playerSelection, computerSelection){

    

    playerChoice.textContent = `players choice: ${playerSelection}`;
    computerChoise.textContent = `computers choice: ${computerSelection}`;
    
    if (playerSelection === computerSelection) {
        winner.textContent = 'Draw';
        playerPoints += 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner.textContent = "You Win! Rock beats Scissors";
        playerPoints += 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        winner.textContent = "You Win! Paper beats Rock";
        playerPoints += 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper")
    {
        winner.textContent = "You Win! Scissors beats Paper";
        playerPoints += 1;
    } else {
        winner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerPoints += 1;
    }
    playerScore.textContent = `players score: ${playerPoints}`;
    computerScore.textContent = `computers score: ${computerPoints}`;

    if (playerPoints == 5 || computerPoints == 5) {
        getWinner(playerPoints, computerPoints);
    }
}

function getWinner(playerScore, computerScore){

    if (playerScore === computerScore) {
        winner.textContent = "It's a Draw";
    } else if (playerScore > computerScore) {
        winner.textContent = `You Are the winner!!!`;
    } else {
        winner.textContent = "You Lose!!";
    }

    buttons.forEach((button) => button.disabled = true)
}

function getComputerChoise(){
    return choices[getRandomChoice()];
}

function getRandomChoice(){
    return Math.floor(Math.random() * choices.length);
}


