const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomindex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomindex];
}

function getHumanChoice() {
  let humanChoice = prompt("What's your sign? (rock, paper, or scissors)");
  let choice = humanChoice.toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    return "Invalid choice";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame(event) {
  const humanSelection = event.target.id; // Get the choice based on which button was clicked
  const computerSelection = getComputerChoice();

  let resultMessage = playRound(humanSelection, computerSelection);

  displayResults(resultMessage);
}

function playRound(humanChoice, computerChoice) {
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else {
    resultMessage = "Invalid input. No score was updated.";
  }

  return resultMessage;
}

function displayResults(resultMessage) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p>${resultMessage}</p>
    <p><strong>Scores:</strong> Human: ${humanScore}, Computer: ${computerScore}</p>
  `;
}
