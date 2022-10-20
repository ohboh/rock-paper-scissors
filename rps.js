
var playerScore = 0;
var computerScore = 0;
var computerSelection;

function playRound() {
    computerSelection = getComputerChoice();
    if (playerSelection == "rock"){

        if (computerSelection == "paper") {
            computerScore++;
        }
        else if (computerSelection == "scissors"){
            playerScore++;
        }
    }

    else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            playerScore++;
        }

        else if (computerSelection == "scissors"){
            computerScore++;
        }
    }

    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            computerScore++;
        }
        else if (computerSelection == "paper") {
            playerScore++;
        }
    }

    else {
        result = "INVALID INPUT";
    }
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("rock, paper, scissors? ").toLowerCase();
        playRound();
        console.log (playerScore);
        console.log (computerScore);
        if (i == 4) {
            if (playerScore > computerScore){
                console.log("YOU WON!!!");
            }
            else if (playerScore < computerScore){
                console.log("YOU LOST!!! MUAHAHAHAHAHA");
            }
            else if (playerScore == computerScore){
                console.log("IT'S A TIE!!!! BRUHHHHH");
            }
            else {
                console.log("how?");
            }
        }
    }
}

console.log(game());
