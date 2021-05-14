let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * 3)];
    return(random);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        playerScore += 1;
        return("You win! Rock beats scissors!");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        playerScore += 1;
        return("You win! Scissors beats paper!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore += 1;
        return("You win! Paper beats rock!");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        computerScore += 1;
        return("You lose! Rock beats scissors!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        computerScore += 1;
        return("You lose! Scissors beats paper!");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        computerScore += 1;
        return("You lose! Paper beats rock!");
    } else {
        return("Draw! Play again!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log(`You won ${playerScore} - ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lost ${computerScore} - ${playerScore}!`);
    } else {
        console.log("You drew!");
    }
}

game();

