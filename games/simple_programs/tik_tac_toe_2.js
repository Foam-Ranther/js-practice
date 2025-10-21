function displayArray(array) {
  console.log("\n"); 
  let columnString = ""; 

  for (let index = 1; index <= array.length; index++) {
    columnString += ` ${array[index - 1]} |`; 

    if (index % 3 === 0 ) {
      console.log(columnString); 
      columnString = ""; 
      console.log("---|---|---|")
    }
  }

  console.log("\n"); 
}

function isWinningCombination(array, string, char) {
  for(let index = 0; index < string.length; index++) {
    if (array[string[index]] !== char) {
      return false; 
    }
  }

  return true; 
}

function isPlayerWinner(array, char) { 
  let isWinner = false; 
  const winCombination = ["012", "345", "678", "036", "147", "258", "048", "246"]; 

  for (let index = 0; index < winCombination.length; index++) {
    isWinner = isWinningCombination(array, winCombination[index], char);
    if (isWinner) {
      return isWinner; 
    } 
  }

  return isWinner; 
}


function main() {
  const array = ["*", "*", "7", "*", "*", "*", "6", "7", "8"]; 
  displayArray(array);
  console.log(isPlayerWinner(array, "*")); 
}
main(); 
