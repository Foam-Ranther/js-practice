const CHOICES = ["rock", "paper", "scissors"];

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex]; 
}

function displayResult(p1Choice, p2Choice, result) {
  console.log("\n"); 
  console.log("player 1 choose : ", p1Choice);
  console.log("player 2 choose : ", p2Choice);
  console.log("result : ", result);
  console.log("\n"); 
}

function checkWinner(p1Choice, p2Choice) {
  const winningChoices = ["paper", "scissors", "rock"];
  const p1ChoiceIndex = CHOICES.indexOf(p1Choice);

  if (p2Choice === winningChoices[p1ChoiceIndex]) {
    return displayResult(p1Choice, p2Choice, "player 2 won");
  }

  const p2ChoiceIndex = CHOICES.indexOf(p2Choice);

  if (p1Choice === winningChoices[p2ChoiceIndex]) {
    return displayResult(p1Choice, p2Choice, "player 1 won");
  }

  return displayResult(p1Choice, p2Choice, "It was draw");
}

function play() {
  const rounds = prompt("How many rounds do you wanna play ? "); 

  console.log(`you choose to play for ${rounds} rounds \n`); 

  for (let index = 0; index < rounds; index++) {
    const p1Choice = prompt("player 1 (enter your choice) : "); 
    const p2Choice = randomChoice();
    checkWinner(p1Choice, p2Choice); 
  }
  
  if (confirm()) {
    play(); 
  }

}

function testCheckWinner() {
  checkWinner("rock", "paper");
  checkWinner("rock", "scissors");
  checkWinner("rock", "rock");
  checkWinner("paper", "paper");
  checkWinner("paper", "rock");
  checkWinner("paper", "scissors");
  checkWinner("scissors", "paper");
  checkWinner("scissors", "rock");
  checkWinner("scissors", "scissors");
}

function main() {
  // testCheckWinner(); 
  play(); 
}

main(); 
