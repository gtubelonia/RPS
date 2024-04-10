function getComputerChoice() {

    let choices = Array("ROCK", "PAPER", "SCISSORS");

    return choices[Math.floor((Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {

    var result;
    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        result = `TIE; ${computerSelection} ties with ${playerSelection}`;
        console.log(result);
        return;
    }

    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            if(computerSelection == "PAPER"){
                result =  "You Lose! Paper beats Rock";
            }else{
                result =  "You Win! Scissors loses to Rock";
            }
            break;
        case "PAPER":
            if(computerSelection == "SCISSORS"){
                result =  "You Lose! Scissors beats Paper";
            }else{
                result =  "You Win! Rock loses to Scissors";
            }
            break;
        case "SCISSORS":
            if(computerSelection == "ROCK"){
                result =  "You Lose! Rock beats Scissors";
            }else{
                result =  "You Win! Paper loses to Scissors";
            }
            break;
    }
        console.log(result);
}

function playGame(){

    for(let i = 0; i < 5; i++){
        var playerSelection = prompt("choose Rock, Paper, or Scissors!");
        var computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}