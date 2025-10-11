function printMaze(maze, y, x) {
  maze[y][x] = "P";
  console.log("\n");
  for (let rowIndex = 0; rowIndex < maze.length; rowIndex++) {
    console.log(maze[rowIndex].join(''));
  }
  console.log("\n");
}

function getPattern() {
  const pattern1 = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"]
  ];
  const pattern2 = [
    ["#", " ", "#"],
    [" ", " ", " "],
    ["#", " ", "#"]
  ];

  return pattern2;
}

function main(){
  const maze = getPattern();
  printMaze(maze, 1, 1);
}

main()
