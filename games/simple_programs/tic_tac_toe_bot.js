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
const EMPTY_POSITIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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

function checkIsBlockEmpty(array, playerChosenCoordinate) {
  const yCoor = parseInt(playerChosenCoordinate[0]);
  const xCoor = parseInt(playerChosenCoordinate[1]);

  return array[yCoor][xCoor] !== " ❌ " && array[yCoor][xCoor] !== " 🟢 ";
}

function getChosenBlockPosition(playerName, array) {
  const playerChoice = getInput(playerName);
  const playerChosenCoordinate = getCoordinate(playerChoice - 1);

  if (checkIsBlockEmpty(array, playerChosenCoordinate)) {
    return playerChosenCoordinate;
  }

  console.log("Position has already been occupied \n");
  return getChosenBlockPosition(playerName, array);
}

function removeBlockPosition(randomIndex) {
  EMPTY_POSITIONS[randomIndex] = EMPTY_POSITIONS[EMPTY_POSITIONS.length - 1];
  EMPTY_POSITIONS.pop();
}

function getRandomPosition(array) {
  const randomIndex = Math.floor(EMPTY_POSITIONS.length * Math.random());
  const randomPosition = EMPTY_POSITIONS[randomIndex];
  const randomChoiceCoordinate = getCoordinate(randomPosition);
  removeBlockPosition(randomIndex);

  if (checkIsBlockEmpty(array, randomChoiceCoordinate)) {
    return randomChoiceCoordinate;
  }

  return getRandomPosition(array);
}

function isPlayerChar(coordinate, array, char) {
  const [y, x] = coordinate;
  return array[y][x] === char;
}

function playerNextWinningcoordinate(array, char) {
  let nextWinningMove = [];

  for (let row = 0; row < WIN_COMBINATIONS.length; row++) {
    let countOfPlayerChar = 0;
    const currentRow = WIN_COMBINATIONS[row];

    for (let column = 0; column < currentRow.length; column++) {
      const coordinate = currentRow[column];
      const isChar = isPlayerChar(coordinate, array, char);

      if (isChar) {
        countOfPlayerChar++;
      } else {
        nextWinningMove.push(coordinate);
      }
    }

    if (countOfPlayerChar >= 2 && checkIsBlockEmpty(array, nextWinningMove[0])) {
      return nextWinningMove[0];
    }

    nextWinningMove = [];
  }

  return -1;
}

function getBestStrategicPostion(array) {
  const priorityList = ["11"];
  for (let index = 0; index < priorityList.length; index++) {
    const isBlockEmpty = checkIsBlockEmpty(array, priorityList[index])
    if (isBlockEmpty) {
      return priorityList[index];
    }
  }

  return -1
}

function commonCorner() {

}

function findValidMiddleBlocks(middleBlocks, ) {

}

function choseRandomElement(board, middleBlocks) {
  const randomIndex = Math.floor(middleBlocks.length * Math.random()); 
  console.log(randomIndex); 
  console.log(middleBlocks[randomIndex]); 
  if (checkIsBlockEmpty(board, middleBlocks[randomIndex])) {
    return middleBlocks[randomIndex]; 
  } 
}

function predictOpponentMove(board, char, opponentPositions) {
  const sideWinCombinations = [
    ["00", "01", "02"],
    ["00", "10", "20"],
    ["20", "21", "22"],
    ["02", "12", "22"],
  ]
  const corners = ["00", "02", "20", "22"]; 
  const middleBlocks = ["01", "10", "21", "12"]; 

  let cornerCount = 0; 
  for (let oIndex = 0; oIndex < opponentPositions.length; oIndex++) {
    for (let cIndex = 0; cIndex < corners.length; cIndex++) {
      if (opponentPositions[oIndex] === corners[cIndex]) {
        cornerCount +=1; 
      }
    }
  }


  if (cornerCount >= 2) {
    return choseRandomElement(board, middleBlocks);  
  }

  return commonCorner(); 
  
}

function defenseBotCoordinate(board, char, opponentPositions) {
  const botNextWinningCoordinate = playerNextWinningcoordinate(board, " 🟢 ");
  console.log("---> botNextWinningCoordinate move : ", botNextWinningCoordinate);

  if (botNextWinningCoordinate !== -1) {
    return botNextWinningCoordinate;
  }

  const opponentNextWinningCoordinate = playerNextWinningcoordinate(board, char);
  console.log("---> opponentNextWinningCoordinate : ", opponentNextWinningCoordinate);

  if (opponentNextWinningCoordinate !== -1) {
    return opponentNextWinningCoordinate;
  }

  const opponentNextMove = predictOpponentMove(board, char, opponentPositions);
  if(opponentNextMove !== -1 && opponentPositions.length === 2) {
    return opponentNextMove; 
  }

  const priorityCoordinate = getBestStrategicPostion(board);
  console.log("---> priorityCoordinate move : ", priorityCoordinate);

  if (priorityCoordinate !== -1) {
    return priorityCoordinate;
  }

  const randomCoordinate = getRandomPosition(board);
  return randomCoordinate;
}

function startGame(board, p1Name, p2Name = "SUPER DUPER BOT") {
  const opponentPositions = [];
  let turns = 8;
  let currentTurn = 1;
  display(board);

  let p1ChosenCoordinate = getChosenBlockPosition(p1Name, board);
  opponentPositions.push(p1ChosenCoordinate);
  updateArray(p1ChosenCoordinate, board, " ❌ ");
  display(board);

  while (currentTurn <= turns) {
    const p2ChosenCoordinate = defenseBotCoordinate(board, " ❌ ", opponentPositions);
    console.log("bot chosen coordinate", p2ChosenCoordinate);
    updateArray(p2ChosenCoordinate, board, " 🟢 ");
    display(board);

    if (isPlayerWinner(board, " 🟢 ")) {
      console.log(`${p2Name} won the game 🎉🎉 \n`);
      return;
    }

    p1ChosenCoordinate = getChosenBlockPosition(p1Name, board);
    opponentPositions.push(p1ChosenCoordinate);
    updateArray(p1ChosenCoordinate, board, " ❌ ");
    display(board);

    if (isPlayerWinner(board, " ❌ ")) {
      console.log(`${p1Name} won the game 🎉🎉 \n`);
      return
    }

    currentTurn += 2;
  }

  console.log("It was draw.");
}

function config() {
  const board = [
    [" 1  ", " 2  ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  const p1Name = prompt("Enter your name (p1) : ");
  // const p2Name = prompt("Enter your name (p2) : ")

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`$ SUPER DUPER BOT marker : " 🟢 "`);

  startGame(board, p1Name);

  const wannaPlayAgain = confirm("Do you wanna play again ? ");
  if (wannaPlayAgain) {
    config();
  }
}

function main() {
  const array = [
    [" ❌ ", " ❌ ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  // const coordinates = playerNextWinningcoordinate(array, " ❌ ");
  // updateArray(coordinates, array, " ❌ "); 
  // display(array); 
  config();
  console.log("Thanks for playing :)");
}

main(); 
