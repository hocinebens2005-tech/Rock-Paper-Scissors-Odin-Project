//Declare a FUNCTION that gets the computer choice
function getComputerChoice() {
    //Declaring a random number to ASSIGN it with the computer choice !! i made a logic for the random number to be between 1 to 100.
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    //DECLARE a VARIABLE for the computer choice and assign it with value 0
    let choice = 0;
    //CONDITION :: we have three randomly string value so i'm going to divide the value 100 to 3 part from 1 up to 30 and from 31 up to 60 and from 61 up to 100.
    if (randomNumber <= 30) { //the first one i'm gonna target the ROCK choice and make it between 1 up to 30.
        //ASSIGN the choice value to a string(ROCK)
        choice = String("Rock");
    }
    else if (randomNumber >= 31 && randomNumber <= 60) {// the second target is going to be between 31 up to 60.
        //ASSIGN the choice value to a string(PAPER)
        choice = String("Paper");
    }
    //the last CONDItION we don't need to evaluate an expression because when it reach this statement this MEANS our value well be between 61 and 100.
    else {
        choice = String("Scissors");
    }
    return choice; //RETURN the value back 
}

function getHumanChoice(str1,str2,str3) { // FUNCTION takes the human choice 
    const humanChoice = prompt("Rock, Paper, or Scissors?"); //Ask the user for Input
    humanChoice.toLocaleLowerCase();
    if (humanChoice === "rock") { // if the Human choice was Rock RETURN Rock!
        return "Rock";
    }else if (humanChoice === "paper") { // if the Human choice was Paper RETURN Paper!
        return "Paper";
    }else if (humanChoice === "scissors") { // if the Human choice was Scissors RETURN Scissors!
        return "Scissors";
    }
}
const humanScore = 0; //Hold the Human Score and start from 0!
const computerScore = 0; //Hold the Computer Score and start from 0!

function PlayRound(humanChoice,ComputerChoice) { //The FUNCTION that takes Decision who is the winner!!
    
    if (humanChoice === "Rock" && ComputerChoice === "Paper") { //CONDITIONS Depends on the user input !
           console.log("You lose! Paper beats Rock");           //INCREMENT the score of the Winner!
           computerScore++;
    }
    else if (humanChoice === "Rock" && ComputerChoice === "Rock") {
        console.log("Draw!");
    }
    else if (humanChoice === "Rock" && ComputerChoice === "Scissors") {
        console.log("You win! Rock smash Scissors");
        humanScore++;
    }
   else if (humanChoice === "Paper" && ComputerChoice === "Paper") {
           console.log("Draw");
    }
    else if (humanChoice === "Paper" && ComputerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "Paper" && ComputerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    if (humanChoice === "Scissors" && ComputerChoice === "Paper") {
           console.log("You win! Scissors beats  Paper");
           humanScore++;
    }
    else if (humanChoice === "Scissors" && ComputerChoice === "Scissors") {
        console.log("Draw!");
    }
    else if (humanChoice === "Scissors" && ComputerChoice === "Rock") {
        console.log("You lose! Rock smash Scissors");
        computerScore++;
    }
}

const HumanSelection = getHumanChoice();//VARIABLE with the Human choice
const ComputerSelection = getComputerChoice();//VARIABLE with the Computer choice


//DECLARE new FUNCTION play game
function PlayGame() {
    //INITIALIZE a Counter to play 5 Rounds
    for (let i = 0;i < 5;++i) {
        PlayRound(HumanSelection,ComputerSelection); //call the function with these two VARIABLES!!
    }
}

//call the Function
PlayGame();