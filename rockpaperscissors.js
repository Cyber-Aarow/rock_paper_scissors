function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    if(randomNumber == 0) return "Rock";
    else if(randomNumber == 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){
    let winCondition = false;
    let drawCondition = false;
    
    //Win Condition
    if(playerSelection == "Rock" && computerSelection == "Scissors") winCondition = true;
    else if(playerSelection == "Paper" && computerSelection == "Rock") winCondition = true;
    else if(playerSelection == "Scissors" && computerSelection == "Paper") winCondition = true;
    
    //Draw Condition
    else if(playerSelection == "Rock" && computerSelection == "Rock") drawCondition = true;
    else if(playerSelection == "Paper" && computerSelection == "Paper") drawCondition = true;
    else if(playerSelection == "Scissors" && computerSelection == "Scissors") drawCondition = true;

    //Result
    if(drawCondition) return `It's a draw! Both chose ${playerSelection}!`;
    else if(winCondition){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else{
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

//5-Round Game Session
function game(){
    console.log(`
    
    
    
    
    
    
    `);
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What do you choose?");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

    }
    if(playerScore > computerScore) return `You win!
    ${playerScore} - ${computerScore}`;
    else if(playerScore < computerScore) return `You lose!
    ${playerScore} - ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

//Execute
console.log(game());