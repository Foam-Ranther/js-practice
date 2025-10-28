function encodeInterger(data) {
  return `i${data}e`; 
}

function encode(data) {
  const typeOfData = typeof data; 
  switch (typeOfData) {
    case "number":
      return encodeInterger(data); 
    default:
      return "yes"; 
  }
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

function testAllEncode() {
  displayTestDescription("testing Encode function "); 
  testEncode(123, "i123e", "testing for natural number");
  testEncode(-42, "i-42e", "testing for negative num");
  testEncode(0, "i0e", "testing for number 0");
  testEncode(123, "i123e", "testing for number 123");
}

function testAll() {
  console.log("\n"); 
  console.log("testing cases for bencode chipher : "); 
  testAllEncode(); 
}

function main() {
  testAll();
  console.log("\n"); 
}

main();
