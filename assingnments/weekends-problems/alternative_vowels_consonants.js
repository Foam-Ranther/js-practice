function isVowel(char) {
  const vowels = "aeiou";
  for (let index = 0; index < 5; index++) {
    if (char === vowels[index]) {
      return true;
    }
  }

  return false;
}

// function shouldBeChanged(char, previousChar) {
//   const changedValue = isVowel(char) ? "C" : "V" 
//   return (isVowel(char) &&  previousChar === changedValue); 
// }

function changeString(string) {
  let tempString = "";
  const stringLength = string.length;
  let previousChar = ""

  for (let index = 0; index < stringLength; index++) {
    const isVowelValue = isVowel (string[index]);
    if ((isVowelValue &&  previousChar === "C") || previousChar === "") {
      tempString = tempString + string[index];
      previousChar = isVowelValue ? "V" : "C";
    } 
    if (!(isVowelValue) &&  previousChar === "V" || previousChar === "") {
      tempString = tempString + string[index];
      previousChar = isVowelValue ? "V" : "C";
    }
    console.log(previousChar)
  }

  const tempStringLength = tempString.length;
  
  let stringIndex = 0;
  let tempStringIndex = 0;

  while (tempStringIndex < tempStringLength || stringIndex < stringLength ) {
    if (string[stringIndex] !== tempString[tempStringIndex]) {
      tempString = tempString + "," + string[stringIndex];
      console.log("tempString : ", tempString);
      stringIndex++;
    } else {
      stringIndex++;
      tempStringIndex++;
    }
  }


  return tempString;
}

function composeMessage(string, changedString, expected) {
  const symbol = changedString === expected ? " ✅ " : " ❌ ";
  const actualSection = "| actual value : " + changedString;
  const expectedSection = "| expected value: " + expected;
  const inputSection = "[" + string + "]";

  return symbol + inputSection + actualSection + expectedSection;
}

function changeStringTest(string, expected) {
  const changedString = changeString(string);
  const message = composeMessage(string, changedString, expected);
  
  console.log(message);
}                                              

function testAll() {
  console.log("Alternating vowels and consonants :")
  changeStringTest("apple", "ape,p,l");
  changeStringTest("there", "tere,h");
  changeStringTest("applee", "ape,p,l,e");
}

function main() {
  testAll();
}

main();
