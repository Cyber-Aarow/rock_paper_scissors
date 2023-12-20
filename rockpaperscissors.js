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
    if(drawCondition) return "It's a draw!"
    else if(winCondition) return "You win!"
    else return "You lose!"
}