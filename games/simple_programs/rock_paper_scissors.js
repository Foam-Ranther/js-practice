const CHOICES = ["rock", "paper", "scissors"]; 

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length); 
  console.log(CHOICES[randomIndex]); 
  console.log(randomIndex); 
}

function checkWinner(p1Choice, p2Choice) {
  const winningChoices = ["paper", "scissors", "rock"]; 
  const p1ChoiceIndex = CHOICES.indexOf(p1Choice); 

  if (p2Choice === winningChoices[p1ChoiceIndex]) {
    return "player 2 won"; 
  }

  const p2ChoiceIndex = CHOICES.indexOf(p2Choice); 

  if (p1Choice === winningChoices[p2ChoiceIndex]) {
    return "player 1 won"; 
  }

  return "it was draw"; 
}

function main() {
  console.log(checkWinner("rock", "paper")); 
  console.log(checkWinner("rock", "scissors")); 
  console.log(checkWinner("rock", "rock")); 
  console.log(checkWinner("paper", "paper")); 
  console.log(checkWinner("paper", "rock")); 
  console.log(checkWinner("paper", "scissors")); 
  console.log(checkWinner("scissors", "paper")); 
  console.log(checkWinner("scissors", "rock")); 
  console.log(checkWinner("scissors", "scissors")); 
}

main(); 
