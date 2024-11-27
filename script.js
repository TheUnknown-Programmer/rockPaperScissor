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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    console.log("Invalid input. No score was updated.");
  }
  console.log(`Scores: Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
