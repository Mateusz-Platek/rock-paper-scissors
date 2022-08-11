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

function round(computer, player) {
    let compVal = computer();
    let playerVal = player();
    
    if(compVal == playerVal) {
        return `Draw! You both chose ${compVal}`;
    } else {
        if(compVal == "rock" && player == "paper") {
            return `You Win! ${playerVal} beats ${compVal}`;
        } else if(compVal == "rock" && player == "scissors") {
            return `You Lose! ${compVal} beats ${playerVal}`;
        } else if(compVal == "paper" && player == "scissors") {
            return `You Win! ${playerVal} beats ${compVal}`;
        } else if(compVal == "paper" && player == "rock") {
            return `You Lose! ${compVal} beats ${playerVal}`;
        } else if(compVal == "scissors" && player == "rock") {
            return `You Win! ${playerVal} beats ${compVal}`;
        } else {
            return `You Lose! ${compVal} beats ${playerVal}`;
        }
    }
}