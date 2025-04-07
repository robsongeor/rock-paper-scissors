function getComputerChoice(){
    // Gets a random number between 1 & 3
    let rand3 = Math.ceil(3 * Math.random());

    if (rand3 == 1){
        return "rock"
    } else if (rand3 == 2){
        return "paper"
    }else{
        return "scissors"
    }
}

function getHumanChoice (){
    let choice = prompt("Enter either rock, paper or scissors!", getComputerChoice()).toLowerCase();

    //If correct return the choice
    if((choice == "rock" || choice == "paper" || choice == "scissors")){
        return choice

    }
    // else recursivly repropmpts the user to enter another choice until correct.
    else{
        console.log("Invalid input")
        choice = getHumanChoice();
        return choice
    }
    
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const buttonContainer = document.getElementById("button-container")
    const handButtons = buttonContainer.querySelectorAll("button")

    //When a hand button is clicked play a round with the selected hand
    handButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            playRound(element.textContent.toLowerCase(), getComputerChoice())
            }
        );
    });
    

    function lose(){
        computerScore++;
        return "you lose"
    }
    
    function win(){
        humanScore++;
        return "you win"
    }
    
    //checks to see if the computerChoice is a losing choice and returns the outcome
    function compare(computerChoice, loser){
        if(computerChoice == loser){
            return lose();
        } else {
            return win();
        }
    }
 
    function playRound(humanChoice, computerChoice){
        
        //Plays a round of rock paper scissors.
        //First checks to the if choices result in a draw -- Edge Case
        //Checks humanChoice and returns approriate result -- see compare()
        console.log(`Your choice: ${humanChoice}. Computer choice: ${computerChoice}`)
    
        if (humanChoice == computerChoice){
            return "draw, try again"
        }
    
        if (humanChoice === "rock"){
            return compare(computerChoice, "paper");
        }
        else if (humanChoice === "paper"){
            return compare(computerChoice, "scissors");
        }
        else{
            return compare(computerChoice, "rock")
        }
        
    }
    
    console.log(`Player score: ${humanScore} Computer score: ${computerScore}`)


}




playGame();




