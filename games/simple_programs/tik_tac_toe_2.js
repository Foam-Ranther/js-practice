function pad(count, string, char) {
  let paddedString = string.padStart(string.length + count ,char); 
  return paddedString; 
}

function convertArrayToString(array) {
  const tempArray = []
  for (let index = 0; index < array.length; index++) {
    let columnString =array[index].join("|"); 
    tempArray.push(pad(5, columnString, " ")); 
  }
  
  return tempArray.join("\n     ----|----|----\n"); 
}

function displayArray(array) {
  const convertedString = convertArrayToString(array); 
  // console.log(convertedString); 
  const paddedString =  pad(5, convertedString, "\n");
  console.log(paddedString);  
  console.log("\n \n")
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

function testDisplayArray() {
  const array = [
    [" ❌ ", " ❌ ", " ❌ "], 
    [" ❌ ", " ❌ ", " ❌ "], 
    [" 🟢 ", " 🟢 ", " 🟢 "], 
  ]; 
  
  displayArray(array); 
}

function main() {
  const array = [
    ["0", "1", "2"], 
    ["3", "4", "5"], 
    ["6", "7", "8"], 
  ]; 
  // displayArray(array);
  // console.log(isPlayerWinner(array, "*")); 
  testDisplayArray(); 
}
main(); 
