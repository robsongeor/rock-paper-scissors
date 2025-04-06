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
    
    return choice
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function lose(){
        computerScore++;
        return "you lose"
    }
    
    function win(){
        humanScore++;
        return "you win"
    }
    
    //returns a win or a lose vs the computer
    //if 
    function compare(computerChoice, loser){
        if(computerChoice == loser){
            return lose();
        } else {
            return win();
        }
    }
    
    function playRound(humanChoice, computerChoice){
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
    
    for (let index = 0; index < 5; index++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }

    console.log(`Player score: ${humanScore} Computer score: ${computerScore}`)
    
}

playGame()





