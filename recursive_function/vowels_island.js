function countVowelsIsland(string) {
  const count = 0;
  const index = 0;
  const editedString = string + " ";

  return countVowelsIslandLoop(editedString, index, count);
}

function countVowelsIslandLoop(string, index, count) {
  const isPreviousVowel = isVowel(string[index - 1], 0); 
  const isCurrentConsonant = !isVowel(string[index], 0);

  if (index === string.length) {
    return count;
  }

  if (isPreviousVowel && isCurrentConsonant) {
    count++;
  }

  return countVowelsIslandLoop(string, index + 1, count);
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

function testCountVowelsIsland(string, expected) {
  const actual = countVowelsIsland(string);
  const message = composeMessage(string, actual, expected);
  
  console.log(message);
}

function testAllCases() {
  console.log("Find Vowels Island : ");
  testCountVowelsIsland("hello world", 3);
  testCountVowelsIsland("aeiou", 1);
  testCountVowelsIsland("fool", 1);
  testCountVowelsIsland("eating", 2);
  testCountVowelsIsland(" ", 0);
  testCountVowelsIsland("", 0);
  testCountVowelsIsland("123ei", 1);
}

function main() {
  testAllCases();
}

main();
