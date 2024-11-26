function getComputerChoice() {
  let hand = ["Rock", "Paper", "Scissor"];
  let randomindex = Math.floor(Math.random() * hand.length);
  return hand[randomindex];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "What's your sign? (rock, paper, or scissors)"
  ).toLowerCase();

  if (["rock", "paper", "scissors"].includes(humanChoice)) {
    return humanChoice;
  } else {
    return "Invalid choice. Please reload and try again.";
  }
}
