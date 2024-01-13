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

function run(){
    console.log(playRound(choice, getComputerChoice()));
}

/*
    if(playerScore > computerScore) return `You win!
    ${playerScore} - ${computerScore}`;
    else if(playerScore < computerScore) return `You lose!
    ${playerScore} - ${computerScore}`;

let playerScore = 0;
let computerScore = 0;
*/


//Execute
let choice = "";
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', (e) => {
    choice = "Rock";
    run();
});

paper.addEventListener('click', (e) => {
    choice = "Paper";
    run();
});

scissors.addEventListener('click', (e) => {
    choice = "Scissors";
    run();
});