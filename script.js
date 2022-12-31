

const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let x = Math.floor((Math.random() * 3));
    switch (x) {
        case 0:
            return choice[0]

        case 1:
            return choice[1]

        case 2:
            return choice[2]

    }
}


function playRound(playerSelection, computerSelection) {
    return (playerSelection === computerSelection) ? "It's a tie"
        : (playerSelection === "rock" && computerSelection === choice[1]
            || playerSelection === "paper" && computerSelection === choice[2]
            || playerSelection === "scissors" && computerSelection === choice[0]) ? `You lose ${computerSelection} beats ${playerSelection}`
            : `You win ${playerSelection} beats ${computerSelection}`;

}


function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection === computerSelection) {
            playerCount++;
            computerCount++;
        } else if (playerSelection === "rock" && computerSelection === choice[1]
            || playerSelection === "paper" && computerSelection === choice[2]
            || playerSelection === "scissors" && computerSelection === choice[0]) {

            computerCount++;
        } else {
            playerCount++;

        }


    }
    console.log(`Player Score: ${playerCount}`);
    console.log(`Computer Score: ${computerCount}`);
    if (playerCount < computerCount) console.log("Computer Wins!");
    else if (playerCount > computerCount) console.log("Player Wins!");
    else console.log("It's a Tie")

}


