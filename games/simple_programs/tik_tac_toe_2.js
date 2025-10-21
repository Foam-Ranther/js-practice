function pad(count, string, char) {
  let paddedString = string.padStart(string.length + count, char);
  return paddedString;
}

function convertArrayToString(array) {
  const tempArray = []
  for (let index = 0; index < array.length; index++) {
    let columnString = array[index].join("|");
    columnString = pad(5, columnString, " ");
    tempArray.push(columnString);
  }

  return tempArray.join("\n     ----|----|----\n");
}

function displayArray(array) {
  const convertedString = convertArrayToString(array);
  // console.log(convertedString); 
  const paddedString = pad(2, convertedString, "\n");
  console.log(paddedString);
  console.log("\n \n")
}

function display(array) {
  console.clear(); 
  console.log()
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

function getCoordinate(string) {
  const coordinates = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
  const index = parseInt(string) - 1;
  return coordinates[index];
}

function updateArray(coordinates, array,) {
  const yCoor = parseInt(coordinates[0]);
  const xCoor = parseInt(coordinates[1]);
  array[yCoor][xCoor] = " ❌ ";
}

function validate(playerInput) {
  return playerInput !== 
}

function getInput() {
  console.log("Enter the block number in order to chose the block")
  const playerInput = prompt("Enter your choice p1 : ");

  if(validate(playerInput)) {
    return playerInput;
  }

  console.log("Put valid choice from 1 to 9 \n")
  return getInput(); 
}

function play(array) {
  displayArray(array); 

  const p1ChosenCoordinate = getCoordinate(player1Choice);
  console.log("player1Choice", player1Choice); 
  updateArray(p1ChosenCoordinate, array);
  displayArray(array);

  // const player2Choice = prompt("Enter your choice p2 : "); 

}


function testDisplayArray() {
  const array = [
    [" ❌ ", " 2  ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];

  // displayArray(array); 
}


function main() {
  const array = [
    [" ❌ ", " 2  ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  // displayArray(array);
  // console.log(isPlayerWinner(array, "*"));
  // testDisplayArray();]

  play(array); 
}
main(); 
