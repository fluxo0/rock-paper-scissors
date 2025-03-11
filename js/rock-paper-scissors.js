let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const round = document.querySelector("#round");
const resultsPlayer = document.querySelector("#resultsPlayer");
const resultsComputer = document.querySelector("#resultsComputer");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Player: ${humanChoice} | CPU: ${computerChoice}`);

    let humanChar = humanChoice.charAt(0);
    humanChar = humanChar.toUpperCase();

    let human = humanChar.concat(humanChoice.slice(1));

    let computerChar = computerChoice.charAt(0);
    computerChar = computerChar.toUpperCase();

    let computer = computerChar.concat(computerChoice.slice(1));

    if (humanChoice === computerChoice) {
        round.textContent = `Tie! Both chose ${human}`;
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            round.textContent = `You win! ${human} beats ${computer}`;
        } else {
            computerScore++;
            round.textContent = `You lose! ${computer} beats ${human}`;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            round.textContent = `You win! ${human} beats ${computer}`;
        } else {
            computerScore++;
            round.textContent = `You lose! ${computer} beats ${human}`;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            round.textContent = `You win! ${human} beats ${computer}`;
        } else {
            computerScore++;
            round.textContent = `You lose! ${computer} beats ${human}`;
        }
    } else {
        round.textContent = "Chose between Rock, Paper or Scissors";
    }

    resultsPlayer.textContent = `Player: ${humanScore}`;
    resultsComputer.textContent = `Computer: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5 ) endGame(humanScore, computerScore);
}

function endGame(humanScore, computerScore) {
    rock.remove();
    paper.remove();
    scissors.remove();

    round.remove();
    resultsPlayer.remove();
    resultsComputer.remove();

    console.log(`Player ${humanScore}:${computerScore} Computer`);

    const body = document.querySelector("body");
    const winner = document.createElement("h1");
    body.appendChild(winner);

    if (humanScore > computerScore) {
        winner.textContent = "Player wins the game!";
    } else if (humanScore < computerScore) {
        winner.textContent = "Computer wins the game!";
    } else {
        winner.textContent = "Tie!";
    }
}



