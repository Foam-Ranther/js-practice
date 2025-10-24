const WIN_COMBINATIONS = ["012", "345", "678",
  "036", "147", "258",
  "048", "246"];

const BOARD = [
  " 1  ", " 2  ", " 3 ",
  " 4  ", " 5  ", " 6 ",
  " 7  ", " 8  ", " 9 "
];

function displayBoard() {
  const tempArray = [];
  let columnString = "\n";

  for (let index = 1; index <= BOARD.length; index++) {
    columnString += ` ${BOARD[index - 1]} |`;

    if (index % 3 === 0) {
      tempArray.push(columnString.slice(0, columnString.length - 1));
      columnString = "";
    }
  }
  const finalString = tempArray.join("\n------|------|------\n");
  console.log(`\n\n${finalString}\n\n`);
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

function isBlockEmpty(playerChoice) {
  return BOARD[playerChoice] !== " ❌ " && BOARD[playerChoice] !== " 🟢 ";
}

function getChosenBlockPosition(playerName) {
  const playerChoice = getInput(playerName);

  if (isBlockEmpty(BOARD, playerChoice)) {
    return playerChoice;
  }

  console.log("Position has already been occupied \n");
  return getChosenBlockPosition(playerName, BOARD);
}

function isWinningCombination(string, char) {
  const zerothIndex = parseInt(string[0]);
  const firstIndex = parseInt(string[1]);
  const secondthIndex = parseInt(string[2]);

  return BOARD[zerothIndex] === char && BOARD[firstIndex] === char &&
    BOARD[secondthIndex] === char;
}

function isPlayerWinner(char) {
  let isWinner = false;

  for (let index = 0; index < WIN_COMBINATIONS.length; index++) {
    isWinner = isWinningCombination(WIN_COMBINATIONS[index], char);
    if (isWinner) {
      return isWinner;
    }
  }

  return isWinner;
}

function playTurn(playerName, char) {
  const playerChoice = getChosenBlockPosition(playerName);
  const chosenPosition = playerChoice - 1;

  BOARD[chosenPosition] = char;
  displayBoard();
}

function playAccordingToTurn(currentTurn, p1Name, p2Name) {
  if (currentTurn % 2 === 0) {
    return playTurn(p2Name, " 🟢 ");
  }

  return playTurn(p1Name, " ❌ ");
}

function startGame(p1Name, p2Name) {
  let turns = 9;
  let currentTurn = 1;
  displayBoard();

  playAccordingToTurn(currentTurn, p1Name, p2Name);
  currentTurn += 1;

  while (currentTurn <= turns) {
    playAccordingToTurn(currentTurn, p1Name, p2Name);
    
    if (isPlayerWinner(char)) {
      console.log(`${playerName} won the game 🎉🎉 \n`);
      return;
    }
    currentTurn += 1;
  }

  console.log("It was draw.");
}

function config() {
  const p1Name = prompt("Enter your name (p1) : ");
  const p2Name = prompt("Enter your name (p2) : ")

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`${p2Name} marker : " 🟢 "`);

  startGame(p1Name, p2Name);

  const wannaPlayAgain = confirm("Do you wanna play again ? ");
  if (wannaPlayAgain) {
    config();
  }
}

function main() {
  config();
  console.log("Thanks for playing.");
}

main(); 
