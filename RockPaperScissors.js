function getComputerChoice() {

    let choices = Array("ROCK", "PAPER", "SCISSORS");

    return choices[Math.floor((Math.random() * choices.length))];
}

var playerWinCounter = 0,
    botWinCounter = 0;
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let Score = playRound(button.className);
        updateScore(Score);
    });
});

const divResult = document.querySelector(".results");

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
        , result;
    console.log(playerSelection);
    console.log(computerSelection);

    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        result = `TIE; ${computerSelection} ties with ${playerSelection}`;
        console.log(result);
        return result;
    }

    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection == "PAPER") {
                result = "You Lose! Paper beats Rock";
            } else {
                result = "You Win! Scissors loses to Rock";
            }
            break;
        case "PAPER":
            if (computerSelection == "SCISSORS") {
                result = "You Lose! Scissors beats Paper";
            } else {
                result = "You Win! Rock loses to Scissors";
            }
            break;
        case "SCISSORS":
            if (computerSelection == "ROCK") {
                result = "You Lose! Rock beats Scissors";
            } else {
                result = "You Win! Paper loses to Scissors";
            }
            break;
    }

    console.log(result);

    return result;
}

function updateScore(result) {
    if (result.includes("Win")) {
        playerWinCounter++;
    } else if(result.includes("Lose")){
        botWinCounter++;
    }

    divResult.textContent = `Player Score: ${playerWinCounter}| Bot Score: ${botWinCounter} \n`;
    if (playerWinCounter >= 5 || botWinCounter >= 5 && playerWinCounter > botWinCounter) {
        divResult.textContent = "Player Wins";
        botWinCounter = 0;
        playerWinCounter = 0;
    } else if(playerWinCounter >= 5 || botWinCounter >= 5 && playerWinCounter < botWinCounter){
        divResult.textContent = "Bot wins";
        botWinCounter = 0;
        playerWinCounter = 0;
    }
}
