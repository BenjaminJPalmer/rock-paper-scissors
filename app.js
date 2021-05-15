let playerScore = 0;
let computerScore = 0;
const para = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * 3)];
    return(random);
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        playerScore += 1;
        para.textContent = "You win! Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        playerScore += 1;
        para.textContent = "You win! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore += 1;
        para.textContent = "You win! Paper beats rock!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        computerScore += 1;
        para.textContent = "You lose! Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        computerScore += 1;
        para.textContent = "You lose! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        computerScore += 1;
        para.textContent = "You lose! Paper beats rock!";
    } else {
        para.textContent = "Draw! Play again!";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        playRound(button.id, computerSelection);
        
        score.textContent = `${playerScore} - ${computerScore}`;
        
        if (playerScore === 5) {
            winner.textContent = "You win! Reset to play again!";
        } else if (computerScore === 5) {
            winner.textContent = "You lose! Reset to play again!";
        }
    });
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "";
    score.textContent = "0 - 0";
    winner.textContent = "";
})


/* function game() {
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
} */