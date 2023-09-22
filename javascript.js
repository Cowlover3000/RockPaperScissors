const choices = ["Rock", "Paper", "Scissors"];


function playSingleRound(playerSelection, computerSelection){

    

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

    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Choose your weapon","").toLowerCase();
        let playerFirstLetter = playerSelection.charAt(0).toUpperCase();
        let computerSelection = getComputerChoise();
        playerSelection = playerFirstLetter + playerSelection.slice(1);
        let temp = playSingleRound(playerSelection, computerSelection)
        console.log(temp);
        if (temp.match("You Win!")) {
            playerScore += 1;
        } else if (temp.match("You Lose!")) {
            computerScore += 1;
        } 
    }

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
    return Math.floor(Math.random() * choices.length)
}


game();
