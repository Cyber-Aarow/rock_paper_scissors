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
    result.textContent = playRound(choice, getComputerChoice());
    playerDisplay.textContent = playerScore;
    computerDisplay.textContent = computerScore;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore) resultFinal.textContent = `You win!
        ${playerScore} - ${computerScore}`;
        else if(playerScore < computerScore) resultFinal.textContent = `You lose!
        ${playerScore} - ${computerScore}`;
        createResetButton();
    }
}

function createResetButton(){
    let resetButton = document.createElement('button');
    resetButton.setAttribute('style', 'color: white; background: green;')
    resetButton.textContent = "Play again?";
    let resetContainer = document.querySelector('#resetContainer');
    resetContainer.appendChild(resetButton);
    resetButton.addEventListener('click', (e) => {
        reset();
        resetContainer.removeChild(resetContainer.firstChild);
    });
    
}

function reset(){
    playerScore = 0;
    computerScore = 0;

    playerDisplay.textContent = 0;
    computerDisplay.textContent = 0;
    
    result.textContent = " ";
    resultFinal.textContent = " ";
}


let playerScore = 0;
let computerScore = 0;
//Execute
let choice = "";
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let playerDisplay = document.querySelector('#playerDisplay');
let computerDisplay = document.querySelector('#computerDisplay');
let result = document.querySelector('#result');
let resultFinal = document.querySelector('#resultFinal');

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