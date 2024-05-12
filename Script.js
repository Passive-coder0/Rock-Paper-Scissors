let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    const compChoice = options[random];
    return compChoice;
}

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let cpu = document.querySelector("#cpu");
let user = document.querySelector("#user");
let text = document.querySelector("#text");
let userInput = "";

btn1.addEventListener("click", () => {
    userInput = "rock";
    playRound();
})
btn2.addEventListener("click", () => {
    userInput = "paper";
    playRound();
})
btn3.addEventListener("click", () => {
    userInput = "scissors";
    playRound();
})

let userScore = 0;
let compScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    function winner() {
        if (computerChoice === userInput) {
            return `Tie! ${userInput} and ${computerChoice}.`;
        } else if (
            (computerChoice === "rock" && userInput === "scissors") ||
            (computerChoice === "paper" && userInput === "rock") ||
            (computerChoice === "scissors" && userInput === "paper")
        ) {
            compScore++;
            cpu.textContent = String(compScore)
            return `You lost! ${computerChoice} beats ${userInput}.`;
        } else {
            userScore++;
            user.textContent = String(userScore)
            return `You won! ${userInput} beats ${computerChoice}.`;
        }
    }

    let winnerText = winner();

    text.innerHTML = (`Computer chose ${computerChoice} <br> You chose ${userInput}<br> \n${winnerText}`);
}