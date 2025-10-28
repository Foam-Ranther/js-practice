function encodeInterger(data) {
  return `i${data}e`; 
}

function encodeString(data) {
  return `${data.length}:${data}`; 
}

function encodeArray(data) {
  const encodeElements = [];

  for (let index = 0; index < data.length; index++) {
    const encodedString = encode(data[index]); 
    encodeElements.push(encodedString); 
  }

  const combinedString = encodeElements.join(""); 
  return `l${combinedString}e`; 
}

function encode(data) {
  const typeOfData = typeof data; 

  switch (typeOfData) {
    case "number":
      return encodeInterger(data); 
    case "string": 
      return encodeString(data); 
    case "object": 
      return encodeArray(data); 
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
  testEncode("hello", "5:hello", "testing for string");
  testEncode("hey you", "7:hey you", "testing for string with 2 words");
  testEncode("#$%Hell", "7:#$%Hell", "testing for string with special chars");
   testEncode(["apple", 123, "banana"], 
    "l5:applei123e6:bananae", 
    "testing array");
  testEncode(["apple", 123, ["banana", -5]], 
    "l5:applei123el6:bananai-5eee", 
    "testing nested array");
  testEncode([], "le", "testing for empty array");
  testEncode(["one", ["two", ["three"]]],
    "l3:onel3:twol5:threeeee",
    "testing for double nested array");
   
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
