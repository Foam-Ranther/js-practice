function findVowelsIsland(string) {
  const count = 0;
  const index = 0;
  const editedString = string + " ";

  return loopString(editedString, index, count);
}

function loopString(string, index, count) {
  if (index === string.length) {
    return count;
  }

  if (isVowel(string[index - 1], 0) && !isVowel(string[index], 0)) {
    count++;
  }

  return loopString(string, index + 1, count);
}

function isVowel(char, index) {
const vowels = "aeiou";
  
  if (index === vowels.length) {
    return false;
  }

  if (char === vowels[index]) {
    return true;
  }

  return isVowel(char, index + 1);
}

function composeMessage(string, actual, expected) {
  const symbol = expected === actual ? " ✅ " : " ❌ ";
  const actualSection = `| actual : [${actual}]`;
  const expectedSection = `| expected : [${expected}]`;
  const inputSection = `[${string}]`;

  return symbol + inputSection + actualSection + expectedSection;
}

function testFindVowelsIsland(string, expected) {
  const actual = findVowelsIsland(string);
  const message = composeMessage(string, actual, expected);
  
  console.log(message);
}

function testAllCases() {
  console.log("Find Vowels Island : ");
  testFindVowelsIsland("hello world", 3);
  testFindVowelsIsland("aeiou", 1);
  testFindVowelsIsland("fool", 1);
  testFindVowelsIsland("eating", 2);
  testFindVowelsIsland(" ", 0);
  testFindVowelsIsland("", 0);
  testFindVowelsIsland("123ei", 1);
}

function main() {
  testAllCases();
}

main();
