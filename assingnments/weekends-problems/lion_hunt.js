function findClosestZebra(string) {
  return 0;
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
