var computerChoiceDisplay = document.getElementById("computerChoice");
var playerChoiceDisplay = document.getElementById("playerChoice");
var resultDisplay = document.getElementById("result");

var possibleChoices = document.querySelectorAll("button");

var userChoice;
var computerChoice;
var result;

possibleChoices.forEach(element => element.addEventListener("click", function(e){
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    var randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    if(randomNumber == 0){
        computerChoice = "rock"  
    }
    if(randomNumber == 1){
        computerChoice = "paper"  
    }
    if(randomNumber == 2){
        computerChoice = "scissors"  
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult(){
    if(userChoice == computerChoice){
        result = "it's a draw!"
    }
    if((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")){
        result = "you win!"
    }
    if((userChoice == "rock" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "rock")){
        result = "you lose!"
    }
    resultDisplay.innerHTML = result;
}



