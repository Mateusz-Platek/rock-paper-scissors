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