// Variables
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const displayComputerChoice = document.getElementById('computer-choice');

// Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

// Functions
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    displayComputerChoice.textContent = `Computer chose ${computerSelection}`;

    if (playerSelection === computerSelection) {
        results.textContent = `It's a tie!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = `You Lose! Paper beats Rock`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = `You Win! Rock beats Scissors`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = `You Win! Paper beats Rock`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = `You Lose! Scissors beats Paper`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = `You Lose! Rock beats Scissors`;
    } else if (playerSelection === "scissors" && computerSelection === "paper")
        results.textContent = `You Win! Scissors beats Paper`;
}