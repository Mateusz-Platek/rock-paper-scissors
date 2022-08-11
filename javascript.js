function getComputerChoice() {
    let val = Math.floor(Math.random() * 100) % 3;
    if(val === 0) {
        return "rock";
    } else if(val === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let val = prompt("What is your choice?");
    return val.toLowerCase();
}

function playRound(computer, player) {
    let compVal = computer();
    let playerVal = player();
    
    if(compVal == playerVal) {
        return `Draw!`;
    } else {
        if(compVal == "rock" && playerVal == "paper") {
            return `Win!`;
        } else if(compVal == "rock" && playerVal == "scissors") {
            return `Lose!`;
        } else if(compVal == "paper" && playerVal == "scissors") {
            return `Win!`;
        } else if(compVal == "paper" && playerVal == "rock") {
            return `Lose!`;
        } else if(compVal == "scissors" && playerVal == "rock") {
            return `Win!`;
        } else {
            return `Lose!`;
        }
    }
}

function game() {
    let compScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++) {
        let round = playRound(getComputerChoice, getPlayerChoice);
        if(round == "Win!") {
            playerScore++;
            console.log("Win!");
        } else if(round == "Lose!") {
            compScore++;
            console.log("Lose!");
        } else {
            console.log("Draw!");
        }
    }

    if(compScore > playerScore) {
        return "Computer Won!";
    } else if(playerScore > compScore) {
        return "You Won!";
    } else {
        return "Draw!";
    }
}