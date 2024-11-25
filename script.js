function getComputerChoice() {
  let hand = ["Rock", "Paper", "Scissor"];
  let randomindex = Math.floor(Math.random() * hand.length);
  return hand[randomindex];
}

console.log(getComputerChoice());
