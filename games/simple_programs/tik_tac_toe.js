const WIN_COMBINATIONS = ["012", "345", "678",
  "036", "147", "258",
  "048", "246"];

function displayBoard(board) {
  const tempArray = [];
  let columnString = "\n";

  for (let index = 1; index <= board.length; index++) {
    columnString += ` ${board[index - 1]} |`;

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

function getInput(board, playerName) {
  console.log("Enter the block number in order to chose the block");

  let playerInput = prompt(`Enter your choice ${playerName} : `);
  playerInput = parseInt(playerInput);

  if (isValidInput(playerInput)) {
    return playerInput;
  }

  console.log("❌ Invalid user Input, Try again \n");
  return getInput(board, playerName);
}

function isBlockEmpty(board, playerChoice) {
  return board[playerChoice] !== " ❌ " && board[playerChoice] !== " 🟢 ";
}

function getChosenBlockPosition(board, playerName) {
  const playerChoice = getInput(board, playerName);

  if (isBlockEmpty(board, playerChoice)) {
    return playerChoice;
  }

  console.log("Position has already been occupied \n");
  return getChosenBlockPosition(board, playerName, board);
}

function isWinningCombination(board, string, char) {
  const zerothIndex = parseInt(string[0]);
  const firstIndex = parseInt(string[1]);
  const secondthIndex = parseInt(string[2]);

  return board[zerothIndex] === char && board[firstIndex] === char &&
    board[secondthIndex] === char;
}

function isPlayerWinner(board, char) {
  let isWinner = false;

  for (let index = 0; index < WIN_COMBINATIONS.length; index++) {
    isWinner = isWinningCombination(board, WIN_COMBINATIONS[index], char);
    if (isWinner) {
      return isWinner;
    }
  }

  return isWinner;
}

function playTurn(board, playerName, char) {
  const playerChoice = getChosenBlockPosition(board, playerName);
  const chosenPosition = playerChoice - 1;

  board[chosenPosition] = char;
  displayBoard(board);
}

function chosePlayer(currentTurn, p1Name, p2Name) {
  if (currentTurn % 2 === 0) {
    return [" 🟢 ", p2Name]; 
  }

  return [" ❌ ", p1Name]; 

}

function startGame(board, p1Name, p2Name) {
  let turns = 9;
  let currentTurn = 1;
  displayBoard(board);

  playTurn(board, p1Name, " ❌ ");
  currentTurn += 1;

  while (currentTurn <= turns) {
    const [char, playerName] = chosePlayer(currentTurn, p1Name, p2Name); 
    console.log(char, playerName); 
    playTurn(board, playerName, char);
    
    if (isPlayerWinner(board, char)) {
      console.log(`${playerName} won the game 🎉🎉 \n`);
      return;
    }

    currentTurn += 1;
  }

  console.log("It was draw.");
}

function config() {
 const board = [
  " 1  ", " 2  ", " 3 ",
  " 4  ", " 5  ", " 6 ",
  " 7  ", " 8  ", " 9 "
];
  const p1Name = prompt("Enter your name (p1) : ");
  const p2Name = prompt("Enter your name (p2) : ")

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`${p2Name} marker : " 🟢 "`);

  startGame(board, p1Name, p2Name);

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
