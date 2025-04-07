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

    const buttonContainer = document.getElementById("button-container")
    const handButtons = buttonContainer.querySelectorAll("button")

    //When a hand button is clicked play a round with the selected hand
    handButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
            playRound(element.textContent.toLowerCase(), getComputerChoice())
            }
        );
    });

    const results = document.getElementById("results");
    const displayScores = results.querySelectorAll("p");

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
            return getResultAndUpdateScore("you lose", computerScore)
        } else {
            return getResultAndUpdateScore("you win", humanScore)
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
            return isLoser(computerChoice, "paper");
        }
        else if (humanChoice === "paper"){
            return isLoser(computerChoice, "scissors");
        }
        else{
            return isLoser(computerChoice, "rock")
        }
        
        
        
    }
    
   


}




playGame();




