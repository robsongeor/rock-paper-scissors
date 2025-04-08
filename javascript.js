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
    let humanScore = {value: 0};
    let computerScore = {value: 0};

    const results = document.getElementById("results");
    const displayScores = results.querySelectorAll("p");

    const buttonContainer = document.getElementById("button-container")
    const handButtons = buttonContainer.querySelectorAll("button")

    const outcome = document.getElementById("outcome")

    //When a hand button is clicked play a round with the selected hand
    handButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            let nemesisChoice = getComputerChoice()
            let result = playRound(element.textContent.toLowerCase(), nemesisChoice);
            outcome.textContent = `Nemesis chose ${nemesisChoice}. ${result}`
            }
        );
    });

    
    function getResultAndUpdateScore(outcome, scoreToIncrement){
        scoreToIncrement.value++;

        displayScores.forEach(element => {
            switch (element.className) {
                case "player-score":
                    element.textContent = `Player Score: ${humanScore.value}`
                    break;
                case "nemesis-score":
                    element.textContent = `Nemesis Score: ${computerScore.value}`
                    break;   
                default:
                    break;
            }
        });

        console.log(`Player score: ${humanScore.value} Computer score: ${computerScore.value}`)

        return outcome;
    }
    
    //checks to see if the computerChoice is a losing choice then updates score and returns the outcome
    function isLoser(computerChoice, loser){
        if(computerChoice == loser){
            return getResultAndUpdateScore("You lose!", computerScore)
        } else {
            return getResultAndUpdateScore("You win!", humanScore)
        }
    }
 
    function playRound(humanChoice, computerChoice){
        if (humanScore.value + computerScore.value == 5){
            humanScore = {value: 0};
            computerScore = {value: 0};
        }

        //Plays a round of rock paper scissors.
        //First checks to the if choices result in a draw -- Edge Case
        //Checks humanChoice and returns approriate result -- see compare()
        if (humanChoice == computerChoice){
            return "Draw, try again."
        }
    
        if (humanChoice === "rock"){
            return isLoser(computerChoice, "paper");
        }
        else if (humanChoice === "paper"){
            return isLoser(computerChoice, "scissors");
        }
        else{
            return isLoser(computerChoice, "rock")
        }
        
        
        
    }
    
   /* TO DO
        - Disply CPU hand after button is clicked
        - Display winner of the last round
        - Display winner after 5 rounds
        - Selecting new hand starts a new round
    
   */
    

}




playGame();




