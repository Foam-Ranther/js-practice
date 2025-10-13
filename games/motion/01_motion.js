function delay(secs) {
  let index = 1   
  while (index < secs * 1250001643) {
    index++;
  }
}

function printArray(maze) {
  for (let row = 0; row < maze.length; row++) {
    console.log(join(maze[row]));
  }
}

function join(array) {
  let mazeColumn = "";
  for (let column = 0; column < array.length; column++) {
    // let toAdd = typeof array[column] === "undefined" ? "  " : array[column];
    mazeColumn += array[column];
  }

  return mazeColumn;
}

function valueToAdd(direction) {
  const values = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const directions = ["right", "down", "left", "up"];

  const position = directions.indexOf(direction);

  if (position === -1) {
    return false;
  }

  return values[position];
}

function move(string, distance, coordinates, array, time, direction) {
  const addToCoordinate = valueToAdd(direction);
  let prevY = coordinates[0];
  let prevX = coordinates[1];
  array[coordinates[0]][coordinates[1]] = string;

  for (let index = 0; index < distance; index++) {
    updateCoordinates(coordinates, addToCoordinate, array, string);
    delay(time);
    array[prevY][prevX] = "  ";
    console.clear();
    prevY = coordinates[0];
    prevX = coordinates[1];
    printArray(array);
  }
}

function buildShape(string, distance, coordinates, array, time, direction) {
  const addToCoordinate = valueToAdd(direction);
  array[coordinates[0]][coordinates[1]] = string;

  for (let index = 0; index < distance; index++) {
    updateCoordinates(coordinates, addToCoordinate, array, string);
    delay(time);
    console.clear();
    printArray(array);
  }
}


function updateCoordinates(coordinates, addToCoordinates, array, string) {
  const addToY = addToCoordinates[0];
  const addToX = addToCoordinates[1];
  coordinates[0] += addToY;
  coordinates[1] += addToX;
  array[coordinates[0]][coordinates[1]] = string;
}

function moveDiagonallyDown(string, distance, coordinate, array, time) {
  let y = coordinate[0];
  let x = coordinate[1];

  array[y][x] = string;

  for (let index = 0; index < distance; index++) {
    coordinate[1] += 1;
    coordinate[0] += 1;
    array[coordinate[0]][coordinate[1]] = string;
    delay(time);
    console.clear();
    printArray(array);
  }
}

function moveDiagonallyUp(string, distance, coordinate, array, time) {
  let y = coordinate[0];
  let x = coordinate[1];

  array[y][x] = string;

  for (let index = 0; index < distance; index++) {
    coordinate[1] += 1;
    coordinate[0] -= 1;
    array[coordinate[0]][coordinate[1]] = string;
    delay(time);
    console.clear();
    printArray(array);
  }
}

function moveDiagonallyDownX(string, distance, coordinate, array, time) {
  let y = coordinate[0];
  let x = coordinate[1];

  array[y][x] = string;

  for (let index = 0; index < distance; index++) {
    coordinate[0] += 1;
    coordinate[1] -= 1;
    array[coordinate[0]][coordinate[1]] = string;
    delay(time);
    console.clear();
    printArray(array);
  }
}

function getPattern() {

  const array1 = [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],

  ]

  const array2 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],];
  const array3 = [[], [], [], [], []];

  return array1;
}

function spiralingSquare(coordinate, pattern, time) {
  let index = 0;
  while (true) { 
    buildShape("🟫", 30 + index, coordinate, pattern, time, "right");
    buildShape("🟫", 5 + index - 1, coordinate, pattern, time, "down");
    buildShape("🟫", 30 + index, coordinate, pattern, time, "left");
    index -= 1;
    buildShape("🟫", 5 + index, coordinate, pattern, time, "up");
  }
}

function testBuildShape(coordinate, pattern, time) {
  // buildShape("🟫", 30 , coordinate, pattern, time, "right");
  // buildShape("🟫", 5 , coordinate, pattern, time, "down");
  // buildShape("🟫", 30 , coordinate, pattern, time, "left");
  // buildShape("🟫", 5 , coordinate, pattern, time, "up");
  spiralingSquare(coordinate, pattern, time);
}

function testMove(coordinate, pattern, time) {
  move("🟫", 30, coordinate, pattern, time, "right");
  move("🟫", 5, coordinate, pattern, time, "down");
  move("🟫", 30, coordinate, pattern, time, "left");
  move("🟫", 5, coordinate, pattern, time, "up");
}

function testAll() {
  const pattern = getPattern();
  const time = 0.1;
  const coordinate = [0, 0];

  testMove(coordinate, pattern, time);
  testBuildShape(coordinate, pattern, time);
}

function main() {
  testAll();
  // printArray(array);
}

main()

