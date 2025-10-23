const WIN_COMBINATIONS = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["02", "11", "20"],
];


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
  displayArray(array);
  console.log("\n------------------------------------------\n")
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
  for (let index = 0; index < WIN_COMBINATIONS.length; index++) {
    isWinner = isWinningCombination(array, WIN_COMBINATIONS[index], char);
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
  return coordinates[chosenBox];
}

function isBlockEmpty(array, playerChosenCoordinate) {
  const yCoor = parseInt(playerChosenCoordinate[0]);
  const xCoor = parseInt(playerChosenCoordinate[1]);

  return array[yCoor][xCoor] !== " ❌ " && array[yCoor][xCoor] !== " 🟢 ";
}

function getChosenBlockPosition(playerName, array) {
  const playerChoice = getInput(playerName);
  const playerChosenCoordinate = getCoordinate(playerChoice - 1);

  if (isBlockEmpty(array, playerChosenCoordinate)) {
    return playerChosenCoordinate;
  }

  console.log("Position has already been occupied \n");
  return getChosenBlockPosition(playerName, array);
}

function removeChosenPosition(positions, randomIndex) {
  positions[randomIndex] = positions[positions.length - 1];
  positions.pop();
}

function getRandomPosition(positions, array) {
  const randomIndex = Math.floor(positions.length * Math.random());
  const randomPosition = positions[randomIndex];
  const randomChoiceCoordinate = getCoordinate(randomPosition);

  if (isBlockEmpty(array, randomChoiceCoordinate)) {
    removeChosenPosition(positions, randomIndex);
    return randomChoiceCoordinate;
  }

  removeChosenPosition(positions, randomIndex);
  return getRandomPosition(positions, array);
}

function isPlayerChar(coordinate, array, char) {
  const [y, x] = coordinate;
  return array[y][x] === char;
}

function playerNextWinningcoordinate(array) {
  let nextWinningMove = [];

  for (let row = 0; row < WIN_COMBINATIONS.length; row++) {
    let countOfPlayerChar = 0;
    const currentRow = WIN_COMBINATIONS[row];

    for (let column = 0; column < currentRow.length; column++) {
      const coordinate = currentRow[column];
      if (isPlayerChar(coordinate, array, " ❌ ")) {
        countOfPlayerChar++;
      } else {
        nextWinningMove.push(coordinate);
      }
    }

    if (countOfPlayerChar >= 2 && isBlockEmpty(array, nextWinningMove[0])) {
      return nextWinningMove[0];
    }

    nextWinningMove = [];
  }

  return "none";
}


function defenseBotCoordinate(positions, array) {
  const defenseMove = playerNextWinningcoordinate(array); 
  console.log("---> defense move : ", defenseMove); 
  
  if (defenseMove === "none") {
    return getRandomPosition(positions, array); 
  }

  return defenseMove; 
  // const strategy = ["11", ""]
  // const pWC = positions[randomIndex];
  // const randomChoiceCoordinate = getCoordinate(randomPosition);

  // if (isBlockEmpty(array, randomChoiceCoordinate)) {
  //   removeChosenPosition(positions, randomIndex);
  //   return randomChoiceCoordinate;
  // }

  // removeChosenPosition(positions, randomIndex);
  // return getRandomPosition(positions, array);

}

function startGame(array, p1Name, p2Name) {
  const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let turns = 8;
  let currentTurn = 1;
  display(array);

  let p1ChosenCoordinate = getChosenBlockPosition(p1Name, array);
  updateArray(p1ChosenCoordinate, array, " ❌ ");
  display(array);

  while (currentTurn <= turns) {
    const p2ChosenCoordinate = defenseBotCoordinate(positions, array);
    console.log("bot chosen coordinate", p2ChosenCoordinate);
    updateArray(p2ChosenCoordinate, array, " 🟢 ");
    display(array);

    if (isPlayerWinner(array, " 🟢 ")) {
      console.log(`${p2Name} won the game 🎉🎉 \n`);
      return;
    }

    p1ChosenCoordinate = getChosenBlockPosition(p1Name, array);
    updateArray(p1ChosenCoordinate, array, " ❌ ");
    display(array);

    if (isPlayerWinner(array, " ❌ ")) {
      console.log(`${p1Name} won the game 🎉🎉 \n`);
      return
    }

    currentTurn += 2;
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
  console.log(`${p2Name} marker : " 🟢 "`);

  startGame(array, p1Name, p2Name);

  const wannaPlayAgain = confirm("Do you wanna play again ? ");
  if (wannaPlayAgain) {
    config();
  }
  console.log("Thanks for playing :)");
}

function main() {
  const array = [
    [" ❌ ", " 2  ", " 3 "],
    [" 4  ", " ❌ ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  // console.log(playerNextWinningMove(array));
  config();
}

main(); 
