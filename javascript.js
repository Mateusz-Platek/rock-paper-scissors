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

/*function getPlayerChoice() {
    let val = prompt("What is your choice?");
    return val.toLowerCase();
}*/

function playRound(computer, player) {
    let compVal = computer();
    let playerVal = player;
    
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

let compScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
const computerScoreNow = document.querySelector('.computer');
const playerScoreNow = document.querySelector('.player');
const score = document.querySelector('.score');

computerScoreNow.textContent = compScore;
playerScoreNow.textContent = playerScore;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(compScore == 5 || playerScore == 5) {
            compScore = 0;
            playerScore = 0;
        }

        let result = playRound(getComputerChoice, button.id);
        if(result == 'Win!') {
            playerScore++;
            score.textContent = 'You win this round!';
        } else if(result == 'Lose!') {
            compScore++;
            score.textContent = 'You lose this round!';
        } else {
            score.textContent = 'Draw!';
        }

        computerScoreNow.textContent = compScore;
        playerScoreNow.textContent = playerScore;

        if(compScore == 5) {
            score.textContent = 'You lose match!';
        } else if(playerScore == 5) {
            score.textContent = 'You win match!';
        }
    });
})

/*function game() {
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
}*/