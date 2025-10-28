function alternativeChar(string) {
  return "apple";
}

function displayMessage(string, actual, expected, description) {
  if (actual === expected) {
    console.log(` ✅ ${description}`);
    return;
  }

  console.log(` ❌ ${description}`);
  console.log("Input Value    : ", string);
  console.log("Actual Value   : ", actual);
  console.log("Expected Value : ", expected);
}

function testAlternativeChars(string, expected, description) {
  const actual = alternativeChar(string);
  displayMessage(string, actual, expected, description);
}

function underline(string) {
  console.log(string); 
  console.log("-".repeat(string.length)); 
}

function displayTestDescription(description) {
  console.log('\n'); 
  underline(description);
  // console.log("\n");  
}

function testAll() {
  displayTestDescription("Alternating vowels and consonants :"); 
  testAlternativeChars("apple", "apple", "simple test case");
}

function main() {
  testAll();
  testAll();
  testAll();
}

main();
