function nextLetterDistance(startIndex, string, stringLength) {
  let nextTarget = string[startIndex] === "L" ? "Z" : "L"

  for (let index = 1; index < stringLength; index++) {
    if (string[startIndex + index] === nextTarget) {
      return index - 1; 
    }
  }

  if (string[stringLength - 1] === " ") {
    return ;
  }

  return -1;
}

function shouldDistaceBeUpdated(distance, shortestDistance) {
  return shortestDistance > distance || shortestDistance === -1;
}

function distanceOfClosestZebra(string) {
  const stringLength = string.length; 

  let shortestDistance = -1;

  for (let index = 0; index < stringLength - 1; index++) {
    if (string[index] === "L" || string[index] === "Z") {
      const distance = nextLetterDistance(index, string, stringLength);  

      if(shouldDistaceBeUpdated(distance, shortestDistance)) {
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
  const closestDistance = distanceOfClosestZebra(string);
  const message = composeMessage(string, closestDistance, expected);
  
  console.log(message);
}                                              

function testAll() {
  console.log("Finding closest zebra")
  findClosestZebraTest("LZ", 0);
  findClosestZebraTest("L Z", 1);
  findClosestZebraTest("L Z LZ", 0);
  findClosestZebraTest("L  L", -1);
  findClosestZebraTest("ZL", 0);
  findClosestZebraTest("L ZL Z", 0);
  findClosestZebraTest("LLL", -1);
  findClosestZebraTest("ZZZ", -1);
  findClosestZebraTest("LZZL", 0);
  findClosestZebraTest(" L  Z", 2);
  findClosestZebraTest("", -1);
  findClosestZebraTest("Z  LZ ", 0);
  findClosestZebraTest("Z  LZ  ", 0);
  findClosestZebraTest("Z  FL  Z  ", 2);
}

function main() {
  testAll();
}

main();
