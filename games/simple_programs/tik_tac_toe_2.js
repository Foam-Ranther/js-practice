function pad(count, string, char) {
  let paddedString = string.padStart(string.length + count, char);
  return paddedString;
}

function convertArrayToString(array) {
  const tempArray = [];

  for (let index = 0; index < array.length; index++) {
    let columnString = array[index].join("|");
    columnString = pad(5, columnString, " ");
    tempArray.push(columnString);
  }

  return tempArray.join("\n     ----|----|----\n");
}

function displayArray(array) {
  const convertedString = convertArrayToString(array);
  const paddedString = pad(2, convertedString, "\n");
  console.log(paddedString);
  console.log("\n \n")
}

function display(array) {
  console.clear();
  displayArray(array);
}

function isWinningCombination(array, winCombination, char) {
  for (let index = 0; index < winCombination.length; index++) {
    const currentElement = winCombination[index];
    const xCoor = currentElement[1];
    const yCoor = currentElement[0];

    if (array[yCoor][xCoor] !== char) {
      return false;
    }
  }

  return true;
}

function isPlayerWinner(array, char) {
  let isWinner = false;
  const winCombination = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];

  for (let index = 0; index < winCombination.length; index++) {
    isWinner = isWinningCombination(array, winCombination[index], char);
    if (isWinner) {
      return true;
    }
  }

  return false;
}


function updateArray(coordinates, array, char) {
  const yCoor = parseInt(coordinates[0]);
  const xCoor = parseInt(coordinates[1]);
  array[yCoor][xCoor] = char;
}

function isValidInput(playerInput) {
  return playerInput > 0 && playerInput < 10;
}

function getInput(playerName) {
  console.log("Enter the block number in order to chose the block");

  let playerInput = prompt(`Enter your choice ${playerName} : `);
  playerInput = parseInt(playerInput);

  if (isValidInput(playerInput)) {
    return playerInput;
  }

  console.log("❌ Invalid user Input, Try again \n");
  return getInput(playerName);
}

function getCoordinate(chosenBox) {
  const coordinates = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
  return coordinates[chosenBox - 1];
}

function isBlockEmpty(array, playerChosenCoordinate) {
  const yCoor = parseInt(playerChosenCoordinate[0]);
  const xCoor = parseInt(playerChosenCoordinate[1]);

  return array[yCoor][xCoor] !== " ❌ " && array[yCoor][xCoor] !== " 🟢 ";
}

function getChosenBlockPosition(playerName, array) {
  const playerChoice = getInput(playerName);
  const playerChosenCoordinate = getCoordinate(playerChoice);
  
  if (isBlockEmpty(array, playerChosenCoordinate)) {
    return playerChosenCoordinate
  }

  console.log("Position has already been occupied"); 
  getChosenBlockPosition(playerName, array); 
}


function startGame(array, p1Name, p2Name) {
  let turns = 9;
  let currentTurn = 0;
  display(array);

  while (currentTurn < turns) {
    const p1ChosenCoordinate = getChosenBlockPosition(p1Name, array); 
    updateArray(p1ChosenCoordinate, array, " ❌ ");
    display(array);

    if (isPlayerWinner(array, " ❌ ")) {
      console.log(`${p1Name} won the game 🎉🎉`);
      return
    }

    const p2ChosenCoordinate = getChosenBlockPosition(p2Name, array);
    updateArray(p2ChosenCoordinate, array, " 🟢 ");
    display(array);

    if (isPlayerWinner(array, " 🟢 ")) {
      console.log(`${p2Name} won the game 🎉🎉`);
      return;
    }

    currentTurn = currentTurn + 2;
  }

  console.log("It was draw.");
}

function config() {
  const array = [
    [" 1  ", " 2  ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  const p1Name = prompt("Enter your name (p1) : ");
  const p2Name = prompt("Enter your name (p2) : ")

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`${p1Name} marker : " 🟢 "`);

  startGame(array, p1Name, p2Name);

  if (confirm("Do you wanna play again ? ")) {
    config();
  }
}

function main() {
  config();
}

main(); 
