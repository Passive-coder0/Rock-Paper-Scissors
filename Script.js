let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    const compChoice = options[random];
    return compChoice;
}

let computerChoice = getComputerChoice();
let userInput = prompt("Choose rock, paper or scissors: ").toLowerCase();

function winner() {
    if (computerChoice == "rock" && userInput == "rock") {
        let text = "Tie! rock and rock."
        return text
    }
    else if (computerChoice == "rock" && userInput == "paper") {
        let text = "You won! paper beats rock."
        return text
    }
    else if (computerChoice == "rock" && userInput == "scissors") {
        let text = "You lost! rock beats scissors."
        return text
    }
    else if (computerChoice == "paper" && userInput == "rock") {
        let text = "You lost! paper beats rock."
        return text
    }
    else if (computerChoice == "paper" && userInput == "paper") {
        let text = "Tie! paper and paper."
        return text
    }
    else if (computerChoice == "paper" && userInput == "scissors") {
        let text = "You won! Scissors beats paper."
        return text
    }
    else if (computerChoice == "scissors" && userInput == "rock") {
        let text = "You won! Rock beats scissors."
        return text
    }
    else if (computerChoice == "scissors" && userInput == "paper") {
        let text = "You lost! Scissors beats paper."
        return text
    }
    else if (computerChoice == "scissors" && userInput == "scissors") {
        let text = "Tie! Scissors and scissors."
        return text
    }
    else {
        let text = "Invalid option!"
        return text
    }
}       

let winnerText = winner();

console.log(`Computer chose ${computerChoice} \n You chose ${userInput} \n ${winnerText}`);
