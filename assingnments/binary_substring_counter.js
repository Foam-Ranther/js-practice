function isSubstringAt(string, substring, startIndex) {
  const substringLength = substring.length; 

  if (substring === 0) {
    return false;
  }

  for (let index = 1; index < substringLength; index++) {
    if (string[startIndex + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(number, substring) {
  const binaryString = decimalToBinary(number);
  const stopIndex = binaryString.length - substring.length;

  let occurences = 0;
  
  for (let stirngIndex = 0; stirngIndex <= stopIndex; stirngIndex++) {
    if (binaryString[stirngIndex] === substring[0]) {
      if (isSubstringAt(binaryString, substring, stirngIndex)) {
        occurences++;
      }
    }
  }
  return occurences;
}

function decimalToBinary(number) {
  let tempString = "";
  let dividend = number;
  
  if (dividend === 0) {
    return "0";
  }

  while (dividend >= 1) {
    const remainder = dividend % 2; 
    tempString = remainder + tempString;
    dividend = (dividend - remainder) / 2;
  }

  return tempString;
}

function composeMessage(number, substring, actual, expected) {
  const binaryString = decimalToBinary(number);
  const symbol = actual === expected ? " ✅ " : " ❌ ";
  const actualSection = "| actual value : " + actual;
  const expectedSection = "| expected value: " + expected;
  
  let inputSection = "[" + number + ", ";
  inputSection = inputSection + "binary : " + binaryString + ", ";
  inputSection = inputSection + substring + "]";

  return symbol + inputSection + actualSection + expectedSection;
}

function isSubstringTest(number, substring, expected) {
  const occurences = isSubstring(number, substring);
  const message = composeMessage(number, substring, occurences, expected);
  
  console.log(message);
}                                              

function testAll() {
  isSubstringTest(10, "1010", 1);
  isSubstringTest(12, "1101", 0);
  isSubstringTest(12, "1", 2);
  isSubstringTest(0, "1", 0);
  isSubstringTest(0, "0", 1);
  isSubstringTest(15, "1", 4);
  isSubstringTest(15, "11", 3);
  isSubstringTest(15, "111", 2);
  isSubstringTest(10, "10", 2);
}

function main() {
  testAll();
}

main();
