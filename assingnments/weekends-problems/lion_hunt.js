function nextZebraDistace(startIndex, string, stringLength) {
  for (let index = 1; index < stringLength; index++) {
    if (string[startIndex + index] === "Z") {
      return index - 1; 
    }
  }
  return -1;
}

function nextLionDistace(startIndex, string, stringLength) {
  for (let index = 1; index < stringLength; index++) {
    if (string[startIndex + index] === "L") {
      return index - 1; 
    }
  }
  return -1;
}

function findClosestZebra(string) {
  const stringLength = string.length; 
  
  let shortestDistance = -1;

  for (let index = 0; index < stringLength - 1; index++) {
    if (string[index] === "L") {
      const distance = nextZebraDistace(index, string, stringLength);  

      console.log("distance :",distance);

      if(shortestDistance > distance || shortestDistance === -1) {
        shortestDistance = distance;
      }
    }

    if (string[index] === "Z") {
      const distance = nextLionDistace(index, string, stringLength);  

      console.log("distance :",distance);

      if(shortestDistance > distance || shortestDistance === -1) {
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
  findClosestZebraTest("L Z LZ", 0);
  findClosestZebraTest("L  L", -1);
  findClosestZebraTest("ZL", 0);
}

function main() {
  testAll();
}

main();
