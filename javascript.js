console.log("Hello World")

function getComputerChoice(){
    // Gets a random number between 1 & 3
    let rand3 = Math.ceil(3 * Math.random());

    if (rand3 == 1){
        return "Rock"
    } else if (rand3 == 2){
        return "Paper"
    }else{
        return "Scissors"
    }
}

function getHumanChoice (){
    let choice = prompt("Enter either rock, paper or scissors!", "rock")
    
    return choice
}

console.log(getHumanChoice())



