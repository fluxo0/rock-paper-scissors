playGame();

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

function getHumanChoice() {
    let choice = prompt("Type rock, paper or scissors!", "Type here");

    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
        let humanChar = humanChoice.charAt(0);
        humanChar = humanChar.toUpperCase();
    
        let human = humanChar.concat(humanChoice.slice(1));
    
        let computerChar = computerChoice.charAt(0);
        computerChar = computerChar.toUpperCase();
    
        let computer = computerChar.concat(computerChoice.slice(1));
    
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both chose ${human}`);
    
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`);
            } else {
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`);
            }
    
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`);
            } else {
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`);
            }
    
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`);
            } else {
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`);
            }
        
        } else {
            console.log("Chose between Rock, Paper or Scissors");
        }
    }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(`human: ${humanSelection}`);
        console.log(`computer: ${computerSelection}`);

        playRound(humanSelection, computerSelection);
        console.log(`humanScore: ${humanScore}`);
        console.log(`computerScore: ${computerScore}`);
    }

    console.log(`Player ${humanScore}:${computerScore} Computer`);

    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("Tie!")
    }
}