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

function removeOppositeMidBlock(midBlocks, opponentPositions) {
  const oppositeMidBlocks = ["21", "12", "01", "10"];
  for (let opponentIndex = 0; opponentIndex < opponentPositions.length; opponentIndex++) {

    for (let midBlockIndex = 0; midBlockIndex < midBlocks.length; midBlockIndex++) {
      const currentMidBlock = midBlocks[midBlockIndex];

      if (opponentPositions[opponentIndex] === currentMidBlock) {
        const oppositeMidBlockIndex = midBlocks.indexOf(currentMidBlock);
        oppositeMidBlocks[oppositeMidBlockIndex] = oppositeMidBlocks[oppositeMidBlocks.lenght]
        oppositeMidBlocks.pop();
      }
    }
    return oppositeMidBlocks;
  }
}
function choseRandomElement(board, midBlocks) {
  const randomIndex = Math.floor(midBlocks.length * Math.random());

  if (checkIsBlockEmpty(board, midBlocks[randomIndex])) {
    return midBlocks[randomIndex];
  }
}

function findCommonCorner(potentialCorners) {
  console.log(potentialCorners);
  for (let index = 0; index < potentialCorners[0].length; index++) {
    const corner = potentialCorners[0][index];
    if (corner === potentialCorners[1][0] || corner === potentialCorners[1][1]) {
      return corner
    }
  }

  return -1; 
}

function commonCorner(opponentPositions, middleBlocks, presentCorners) {
  console.log("presentCorners", presentCorners);
  const respectiveCorners = [["00", "02"], ["00", "20"], ["20", "22"], ["02", "22"]];
  const potentialCorners = presentCorners;

  for (let opponentIndex = 0; opponentIndex < opponentPositions.length; opponentIndex++) {

    for (let midBlockIndex = 0; midBlockIndex < middleBlocks.length; midBlockIndex++) {
      const currentMidBlock = middleBlocks[midBlockIndex];

      if (opponentPositions[opponentIndex] === currentMidBlock) {
        const potentialCorner = respectiveCorners[middleBlocks.indexOf(currentMidBlock)]
        potentialCorners.push(potentialCorner);
      }
    }
  }

  return findCommonCorner(potentialCorners);

}

function bestStrategicPosition(board, opponentPositions, turn) {
  if (turn === 1) {
    console.log("inside turn === 1");
    return checkIsBlockEmpty(board, "11") ? "11" : "00";
  }

  const corners = ["00", "02", "20", "22"];
  const midBlocks = ["01", "10", "21", "12"];
  const presentCorners = [];

  let cornerCount = 0;
  for (let oIndex = 0; oIndex < opponentPositions.length; oIndex++) {
    for (let cIndex = 0; cIndex < corners.length; cIndex++) {
      if (opponentPositions[oIndex] === corners[cIndex]) {
        cornerCount += 1;
        presentCorners.push(corners[cIndex]);
      }
    }
  }


  if (cornerCount >= 1) {
    const leftMidBlocks = removeOppositeMidBlock(midBlocks, opponentPositions);
    return choseRandomElement(board, leftMidBlocks);
  }

  return commonCorner(opponentPositions, midBlocks, presentCorners);

}

function defenseBotCoordinate(board, char, opponentPositions, turn) {
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


  if (turn > 4) {
    const randomCoordinate = getRandomPosition(board);
    return randomCoordinate;
  }

  const strategicMove = bestStrategicPosition(board, opponentPositions, turn);
  console.log("---> counter move : ", strategicMove);

  if (strategicMove !== -1) {
    return strategicMove;
  }

  return getRandomPosition(board); 
}

function attackBotCoordinate(board, char, opponentPositions, turn) {
  const botNextWinningCoordinate = playerNextWinningcoordinate(board, char);
  console.log("---> botNextWinningCoordinate move : ", botNextWinningCoordinate);

  if (botNextWinningCoordinate !== -1) {
    return botNextWinningCoordinate;
  }

  const opponentNextWinningCoordinate = playerNextWinningcoordinate(board, " ❌ ");
  console.log("---> opponentNextWinningCoordinate : ", opponentNextWinningCoordinate);

  if (opponentNextWinningCoordinate !== -1) {
    return opponentNextWinningCoordinate;
  }
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
    const p2ChosenCoordinate = defenseBotCoordinate(board, " 🟢 ", opponentPositions, currentTurn);
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

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`$ THE INVENCIBLE BOT marker : " 🟢 "`);

  startGame(board, p1Name, "THE INVENCIBLE BOT");

  const wannaPlayAgain = confirm("Do you wanna play again ? ");
  if (wannaPlayAgain) {
    config();
  }
}

function main() {
  config();
  console.log("Thanks for playing :)");
}

main(); 
