function encode(data) {
  return "appl";
}

function displayMessage(data, actual, expected, description) {
  if (actual === expected) {
    console.log(` ✅ ${description}`);
    return;
  }

  console.log(` ❌ ${description}`);
  console.log("Input Value    : ", data);
  console.log("Actual Value   : ", actual);
  console.log("Expected Value : ", expected);
}

function testEncode(data, expected, description) {
  const actual = encode(data);
  displayMessage(data, actual, expected, description);
}

function underline(string) {
  console.log(string); 
  console.log("-".repeat(string.length)); 
}

function displayTestDescription(description) {
  console.log('\n'); 
  underline(description);
}

function testAll() {
  displayTestDescription("Alternating vowels and consonants :"); 
  testEncode("apple", "apple", "simple test case");
}

function main() {
  testAll();
  console.log("\n"); 
}

main();
