
     let HumanSelection = "0";
     let ComputerSelection = "0";



function getComputerChoice() {
    //Declaring a random number to ASSIGN it with the computer choice !! i made a logic for the random number to be between 1 to 100.
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    
    //DECLARE a VARIABLE for the computer choice and assign it with value 0
    let choice = "0";

    //CONDITION :: we have three randomly string value so i'm going to divide the value 100 to 3 part from 1 up to 30 and from 31 up to 60 and from 61 up to 100.
    if (randomNumber <= 30) { //the first one i'm gonna target the ROCK choice and make it between 1 up to 30.
        //ASSIGN the choice value to a string(ROCK)
        choice = String("rock");
    }
    else if (randomNumber >= 31 && randomNumber <= 60) {// the second target is going to be between 31 up to 60.
        //ASSIGN the choice value to a string(PAPER)
        choice = String("paper");
    }
    //the last CONDItION we don't need to evaluate an expression because when it reach this statement this MEANS our value well be between 61 and 100.
    else if(randomNumber >= 61) {
        choice = String("scissors");
    }
    return choice; //RETURN the value back 
}


function getHumanChoice(str1) { // FUNCTION takes the human choice 
    
    if (str1 === "rock") { // if the Human choice was Rock RETURN Rock!
        return "rock";
    }else if (str1 === "paper") { // if the Human choice was Paper RETURN Paper!
        return "paper";
    }else if (str1 === "scissors") { // if the Human choice was Scissors RETURN Scissors!
        return "scissors";
    }
}
let humanScore = 0; //Hold the Human Score and start from 0!
let computerScore = 0; //Hold the Computer Score and start from 0!

const resultDiv = document.createElement('div');
resultDiv.id = 'result-display'
document.body.appendChild(resultDiv);
const scoreDiv = document.createElement('div');
document.body.appendChild(scoreDiv);



function PlayRound(humanChoice) { //The FUNCTION that takes Decision who is the winner!!
   
  
    const ComputerChoice = getComputerChoice().toLocaleLowerCase();//VARIABLE with the Computer choice

    let roundResult ="";


if (humanChoice === "rock" && ComputerChoice === "paper") { //CONDITIONS Depends on the user input !
    roundResult ="You lose! Paper beats Rock";           //INCREMENT the score of the Winner!
           computerScore++;
    }
    else if (humanChoice === "rock" && ComputerChoice === "scissors") {
       roundResult = "You win! Rock smash Scissors";
           humanScore++;
    }
    else if (humanChoice === "paper" && ComputerChoice === "rock") {
       roundResult = "You win! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice === "paper" && ComputerChoice === "scissors") {
       roundResult = "You lose! Scissors beats Paper";
        computerScore++;
    }
  else  if (humanChoice === "scissors" && ComputerChoice === "paper") {
     roundResult = "You win! Scissors beats  Paper";
           humanScore++;
    }
    else if (humanChoice === "scissors" && ComputerChoice === "rock") {
        roundResult = "You lose! Rock smash Scissors";
        computerScore++;
    }
     else  {
      roundResult = "Draw!";
    }
    
    resultDiv.textContent = roundResult;
    scoreDiv.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;

    if (humanScore === 5) {
        scoreDiv.textContent = "congratulation! you win";
    }else if (computerScore === 5) {
        scoreDiv.textContent = "better luck next time!s"
    }
}



const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.innerText = 'rock';
paperBtn.innerText = 'paper';
scissorsBtn.innerText = 'scissors';

const buttons = [rockBtn,paperBtn,scissorsBtn]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        PlayRound(button.textContent.toLocaleLowerCase());
});

document.body.appendChild(button);
});

