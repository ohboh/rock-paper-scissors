
var playerScore = 0;
var computerScore = 0;
var computerSelection = "";
var playerSelection = "";
const playerScoreShow = document.getElementById("player");
const computerScoreShow = document.getElementById("computer");
const winnerShow = document.getElementById("winner");
const boom = document.getElementById("boom");
const playerImg = document.getElementById("player-image")
const computerImg = document.getElementById("computer-image")

document.querySelectorAll("button").forEach(occurence => {
    let id = occurence.getAttribute("id")
    occurence.addEventListener("click", function(){
        playerSelection = id;


        if (playerScore < 5 && computerScore < 5){
            playRound();
            boom.currentTime=0;
            boom.play();
            playerImg.src = "images/" + id + ".png"
            computerImg.src = "images/" + computerSelection + ".png"
            playerScoreShow.textContent = ("player: " + playerScore.toString());
            computerScoreShow.textContent = ("computer: " + computerScore.toString());

            if (playerScore == 5){
                winnerShow.textContent = ("y-y-y-y-you won?!! ヽ(°〇°)ﾉ")
            }
    
            else if (computerScore == 5){
                winnerShow.textContent = ("I WON!!! <(￣︶￣)>")
            }

            if (playerScore == 4 && computerScore < 4){
                winnerShow.textContent = ("(⊙.⊙)")
            }

            if (computerScore == 4 && playerScore < 4){
                winnerShow.textContent = ("ψ(｀∇´)ψ")
            }

            else if (playerScore == 4 && computerScore == 4){
                winnerShow.textContent = ("(｡ŏ_ŏ)")
            }
        }
    });
});

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