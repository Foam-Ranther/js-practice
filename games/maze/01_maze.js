function printMaze(maze, y, x) {
  maze[y][x] = "P";
  console.log("\n");
  for (let rowIndex = 0; rowIndex < maze.length; rowIndex++) {
    console.log(maze[rowIndex].join(''));
  }
  console.log("\n");
}

function validate(instruction) {
  const instructionString = ["a", "d", "w", "s", "quit"];
  const loweCaseInstruction = instruction.toLowerCase()

  if (instructionString.includes(loweCaseInstruction)) {
    return loweCaseInstruction;
  }

  return "invalid";
}

function move(instruction, y, x) {
  const validInstruction = validate(instruction);

  switch (validInstruction) {
    case "w":
      return [y - 1, x];
    case "s":
      return [y + 1, x];
    case "d":
      return [y, x + 1];
    case "a":
      return [y, x - 1];
    default :
      console.log("\nInvalid Instruction ❌ ")
      return [y, x];
  }
}

function getInstruction() {
  const instruction = prompt("[w-up, s-down, d-forward, a-backward] : ");
  return instruction;

}

function play(maze, playerCoordinate) {
  let instruction = "";
  let y = playerCoordinate[0];
  let x = playerCoordinate[1];
  
  while (instruction !== "quit") {
    printMaze(maze, y, x, instruction);
    instruction = getInstruction();
    playerCoordinate = move(instruction, y, x);
    maze[y][x] = " ";
    y = playerCoordinate[0];
    x = playerCoordinate[1];
  }
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

function main() {
  const pattern = getPattern();
  play(pattern, [1, 1]);
}

main();
