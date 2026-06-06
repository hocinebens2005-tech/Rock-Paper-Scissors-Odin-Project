//Declare a FUNCTION that gets the computer choice
function getComputerChoice() {
    //Declaring a random number to ASSIGN it with the computer choice !! i made a logic for the random number to be between 1 to 100.
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    console.log(randomNumber);
    //DECLARE a VARIABLE for the computer choice and assign it with value 0
    let choice = "0";
    console.log(choice);
    //CONDITION :: we have three randomly string value so i'm going to divide the value 100 to 3 part from 1 up to 30 and from 31 up to 60 and from 61 up to 100.
    if (randomNumber <= 30) { //the first one i'm gonna target the ROCK choice and make it between 1 up to 30.
        //ASSIGN the choice value to a string(ROCK)
        choice = String("Rock");
        console.log(choice);
    }
    else if (randomNumber >= 31 && randomNumber <= 60) {// the second target is going to be between 31 up to 60.
        //ASSIGN the choice value to a string(PAPER)
        choice = String("Paper");
        console.log(choice);
    }
    //the last CONDItION we don't need to evaluate an expression because when it reach this statement this MEANS our value well be between 61 and 100.
    else if(randomNumber >= 61) {
        choice = String("Scissors");
        console.log(choice);
    }
    return choice.toLocaleLowerCase(); //RETURN the value back 
}
getComputerChoice();

function getHumanChoice(str1,str2,str3) { // FUNCTION takes the human choice 
    const humanChoice = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase();
    console.log(humanChoice); //Ask the user for Input
    
    if (humanChoice === "rock") { // if the Human choice was Rock RETURN Rock!
        return "Rock";
        console.log(humanChoice);
    }else if (humanChoice === "paper") { // if the Human choice was Paper RETURN Paper!
        return "Paper";
        console.log(humanChoice);
    }else if (humanChoice === "scissors") { // if the Human choice was Scissors RETURN Scissors!
        return "Scissors";
        console.log(humanChoice);
    }
}
let humanScore = 0; //Hold the Human Score and start from 0!
console.log(humanScore);
let computerScore = 0; //Hold the Computer Score and start from 0!
console.log(computerScore);

function PlayRound(humanChoice,ComputerChoice) { //The FUNCTION that takes Decision who is the winner!!
     
    if (humanChoice == ComputerChoice ) {
        console.log("Draw!");
         console.log(humanChoice);
           console.log(ComputerChoice);
    }
   else if (humanChoice == "rock" && ComputerChoice == "paper") { //CONDITIONS Depends on the user input !
           console.log("You lose! Paper beats Rock");           //INCREMENT the score of the Winner!
           computerScore++;
           console.log(computerScore);
           console.log(humanChoice);
           console.log(ComputerChoice);
           return ComputerChoice;
    }

    
    else if (humanChoice == "rock" && ComputerChoice == "scissors") {
        console.log("You win! Rock smash Scissors");
        humanScore++;
         console.log(humanScore);
         console.log(humanChoice);
           console.log(ComputerChoice);
           return humanChoice;
    }
    else if (humanChoice == "paper" && ComputerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
        console.log(humanScore);
         console.log(humanChoice);
           console.log(ComputerChoice);
        return humanChoice;
    }
    else if (humanChoice == "paper" && ComputerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
         console.log(computerScore);
         console.log(humanChoice);
           console.log(ComputerChoice);
        return ComputerChoice;
    }
  else  if (humanChoice == "scissors" && ComputerChoice == "paper") {
           console.log("You win! Scissors beats  Paper");
           humanScore++;
           console.log(humanScore);
            console.log(humanChoice);
           console.log(ComputerChoice);
           return humanChoice;
    }
    
    else if (humanChoice == "scissors" && ComputerChoice == "rock") {
        console.log("You lose! Rock smash Scissors");
        computerScore++;
         console.log(computerScore);
         console.log(humanChoice);
           console.log(ComputerChoice);
           return ComputerChoice;
    }
}

const HumanSelection = getHumanChoice();//VARIABLE with the Human choice
console.log(HumanSelection);
const ComputerSelection = getComputerChoice();//VARIABLE with the Computer choice
console.log(ComputerSelection);

//DECLARE new FUNCTION play game
function PlayGame() {
    let rounds = 5;
    //INITIALIZE a Counter to play 5 Rounds
    while (rounds--) {
        HumanSelection;
        ComputerSelection;
        PlayRound(HumanSelection,ComputerSelection); //call the function with these two VARIABLES!!
    }
    if (humanScore > computerScore) {
        console.log("Congratulation !! tou won")
    }
    else console.log("you lose!! would you like to play again?")
}

//call the Function
PlayGame();
