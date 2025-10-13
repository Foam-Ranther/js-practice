const ROUNDS = 4; 

function randomStrategy() {
  const choices = "cbdefg";
  const randomIndex = Math.floor(Math.random() * choices.length); 
  return 
}

function printResult(string, playerScores) {
  console.log("player 1 , jail years", playerScores[0]);
  console.log("player 2 , jail years", playerScores[1]);
  console.log(`${string}`); 
}

function validateChoice(playerScores, choiceString) {
  const validChoices = ["cc", "cb", "bc", "bb"]
  if (validChoices.includes(choiceString)) {
    return updateScore(playerScores, choiceString)
  }
  return false;  
}

function updateScore(playerScores, choiceString) {
  const valuesToAdd = [[1, 1], [5, 0], [0, 5], [5, 5]];
  const choiceCombinations = ["cc", "cb", "bc", "bb"]
  const incrementValueIndex = choiceCombinations.indexOf(choiceString);
  const incrementValueArray = valuesToAdd[incrementValueIndex];

  playerScores[0] = playerScores[0] + incrementValueArray[0];
  playerScores[1] = playerScores[1] + incrementValueArray[1];
  printResult("", playerScores); 
  return true;
}

function checkWinner(playerScores) {
  return playerScores[0] > playerScores[1] ? "player 1" : "player 2"; 
}
function play(playerScores, ROUNDS) {
  let index = 0
  while (index < ROUNDS) {
    const p1Choice = prompt("Enter your choice (p1) :"); 
    const p2Choice = prompt("Enter your choice (p2) :"); 
    const choiceString = p1Choice + p2Choice;
    const isValid = validateChoice(playerScores, choiceString); 
    if (!isValid) {
      printResult("You entered the wrong choice.", playerScores); 
      index--; 
    }
    index++; 
  } 
  const winner = checkWinner(playerScores); 
  console.log(`${winner} won`); 

}

function testUpdate() {
  const playerScores = [0, 0];
  play(playerScores, ROUNDS);
}
function main() {
  testUpdate();
}


main();
