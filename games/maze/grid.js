// grid
// console.log("1 | 2 | 3\n--|---|--\n4 | 5 | 6\n--|---|--\n7 | 8 | 9");
// console.log("\n");
// console.log("| 1 | 2 | 3 |\n|---|---|---|\n| 4 | 5 | 6 |\n|---|---|---|\n| 7 | 8 | 9 |");

function columnRow(array) {
  // console.log("inside column row :", array);
  return "| " + array.join(" | ") + " |";
}

function joinArray(array) { 
  let seperator = "\n|";
  const nestedArrayLength = array[0].length;

  seperator += "---|".repeat(nestedArrayLength) + '\n';

  for (let row = 0; row < array.length; row++) {
    array[row] = columnRow(array[row]);
  }

  return "|---------------|\n" + array.join(seperator) + "\n|---------------|";
}

function printGrid(){
  const array1 = [
    [1, 4, 1, 4, ],
    [4, 4, 1, 4, ], 
    [7, 4, 1, 4, ],
    [7, 4, 1, 4, ],
    [7, 4, 1, 4, ],
    [7, 4, 1, 4, ]
  ]
  const grid = joinArray(array1);
  console.log(grid);
}

printGrid();
