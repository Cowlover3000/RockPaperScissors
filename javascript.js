const choices = ["Rock", "Paper", "Scissors"];


const buttons = document.querySelectorAll('button');

const div = document.querySelector('div');
const playerChoice = document.createElement('p');
const computerChoise = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const winner = document.createElement('p');


playerChoice.textContent = `players choice:`;
computerChoise.textContent = `computers choice:`;
playerScore.textContent = 'players score: 0';
computerScore.textContent = 'computers score: 0';



div.appendChild(playerChoice);
div.appendChild(computerChoise);
div.appendChild(playerScore);
div.appendChild(computerScore);



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
        return "Draw";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper")
    {
        return "You Win! Scissors beats Paper";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    
    let playerScore = 0;
    let computerScore = 0;

    

    if (playerScore === computerScore) {
        console.log("Draw");
    } else if (playerScore > computerScore) {
        console.log(`You Are the winner with a score of ${playerScore}`);
    } else {
        console.log("You Lose!!");
    }
}

function getComputerChoise(){
    return choices[getRandomChoice()];
}

function getRandomChoice(){
    return Math.floor(Math.random() * choices.length);
}


