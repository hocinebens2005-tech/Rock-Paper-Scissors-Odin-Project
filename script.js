//Declare a FUNCTION that gets the computer choice
function getcomputerchoice() {
    //Declaring a random number to ASSIGN it with the computer choice !! i made a logic for the random number to be between 1 to 100.
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    //DECLARE a VARIABLE for the computer choice and assign it with value 0
    let choice = 0;
    //CONDITION :: we have three randomly string value so i'm going to divide the value 100 to 3 part from 1 up to 30 and from 31 up to 60 and from 61 up to 100.
    if (randomNumber <= 30) { //the first one i'm gonna target the ROCK choice and make it between 1 up to 30.
        //ASSIGN the choice value to a string(ROCK)
        choice = String("Rock");
        console.log(choice);//CHECKING the output 
    }
    else if (randomNumber >= 31 && randomNumber <= 60) {// the second target is going to be between 31 up to 60.
        //ASSIGN the choice value to a string(PAPER)
        choice = String("Paper");
        console.log(choice)//CHECKING the output
    }
    //the last CONDItION we don't need to evaluate an expression because when it reach this statement this MEANS our value well be between 61 and 100.
    else 
        choice = String("scissors");
}