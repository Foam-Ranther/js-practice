function changeString(string) {
  return "ape,p,l"
}

function composeMessage(string, changedString, expected) {
  const symbol = changedString === expected ? " ✅ " : " ❌ ";
  const actualSection = "| actual value : " + changedString;
  const expectedSection = "| expected value: " + expected;
  const inputSection = "[" + string + "]";

  return symbol + inputSection + actualSection + expectedSection;
}

function findClosestZebraTest(string, expected) {
  const changedString = changeString(string);
  const message = composeMessage(string, changedString, expected);
  
  console.log(message);
}                                              

function testAll() {
  console.log("Alternating vowels and consonants :")
  findClosestZebraTest("apple", "ape,p,l");
}

function main() {
  testAll();
}

main();
