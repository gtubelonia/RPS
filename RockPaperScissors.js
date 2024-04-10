function getComputerChoice() {

    let choices = Array("ROCK", "PAPER", "SCISSORS");

    return choices[Math.floor((Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {

    var result;
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

function playGame() {
    let playerWinCounter = 0,
    botWinCounter = 0;

    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("choose Rock, Paper, or Scissors!");
        var computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("You Win")) {
            playerWinCounter += 1;
        }else if (result.includes("You Lose")){
            botWinCounter += 1;
        }
    }

    if (playerWinCounter > botWinCounter) {
        console.log("Player Wins");
    } else {
        console.log("Bot wins");
    }
}
