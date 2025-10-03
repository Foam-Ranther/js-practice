function longestRun(string) {
  const newString = string.trim();

  if(newString === '') {
    return -1;
  }
  
  return realLongestRun(newString, 0, 0, "");
}

function realLongestRun(string, index, HighestFrequecy, mainChar) {
  if (index >= string.length - 1) {
    return mainChar + " " +  HighestFrequecy;
  }

  const charFrequency = findCharFrequency(string[index], string, index );

  if (charFrequency > HighestFrequecy) {
    HighestFrequecy = charFrequency;
    mainChar = string[index];
  }


  return realLongestRun(string, index + charFrequency, HighestFrequecy, mainChar);
}

function findCharFrequency(char, string, index) {
  if (index >= string.length) {
    return 0;
  }

  if (string[index] !== char) {
    return 0;
  }

  return 1 + findCharFrequency(char, string, index + 1);
}

function composeMessage(string, actual, expected) {
  const symbol = expected === actual ? " ✅ " : " ❌ ";
  const actualSection = `| actual : [${actual}]`;
  const expectedSection = `| expected : [${expected}]`;
  const inputSection = `[${string}]`;

  return symbol + inputSection + actualSection + expectedSection;
}

function testLongestRun(string, expected) {
  const actual = longestRun(string);
  const message = composeMessage(string, actual, expected);
  
  console.log(message);
}

function testAllCases() {
  console.log("find longest run of character : ");
  testLongestRun("aaabb", "a 3");
  testLongestRun("", -1);
  testLongestRun("aaabb", "a 3");
  testLongestRun("-----", "- 5");
  testLongestRun("abcdId", "a 1");
  testLongestRun("aaaabbbaaaa", "a 4");
  testLongestRun("aacc", "a 2");
}

function main() {
  testAllCases();
}

main();
