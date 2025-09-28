function nextZebraDistace(startIndex, string, stringLength) {
  for (let index = 1; index < stringLength; index++) {
    if (string[startIndex + index] === "Z") {
      return index -1; 
    }
  }
  return -1;
}

function findClosestZebra(string) {
  const stringLength = string.length; 
  
  let shortestDistance = 0;

  for (let index = 0; index < stringLength; index++) {
    if (string[index] === "L") {
      const distance = nextZebraDistace(index, string, stringLength);  

      if(shortestDistance < distance) {
        shortestDistance = distance;
      }
    }
  }

  return shortestDistance;
}

function composeMessage(string, closestDistance, expected) {
  const symbol = closestDistance === expected ? " ✅ " : " ❌ ";
  const actualSection = "| actual value : " + closestDistance;
  const expectedSection = "| expected value: " + expected;
  const inputSection = "[" + string + "]";

  return symbol + inputSection + actualSection + expectedSection;
}

function findClosestZebraTest(string, expected) {
  const closestDistance = findClosestZebra(string);
  const message = composeMessage(string, closestDistance, expected);
  
  console.log(message);
}                                              

function testAll() {
  console.log("Finding closest zebra")
  findClosestZebraTest("LZ", 0);
  findClosestZebraTest("L Z", 1);
}

function main() {
  testAll();
}

main();
