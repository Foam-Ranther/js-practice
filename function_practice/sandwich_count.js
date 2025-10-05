function countSandwich(string) {
  let count = 0;
  let index = 0;
  let previousBIndex = index;

  while (index <= string.length) {
    if (string[index] === "B") {
      previousBIndex = index;
      index = indexAfterM(string, index);
      count = countBAfterM(string, index, count);
      index = previousBIndex;
    }

    index++;
  }
  return count;
}

function indexAfterM(string, index) {
  while (string[index] !== "M" && index <= string.length) {
    index++;
  }

  return index + 1;
}

function countBAfterM(string, index, count) {
  while (index <= string.length) {
    if(string[index] === "B") {
      count++;
    }

    index++;
  }
  return count; 
}

function realCountSandwich(string, index, subIndex, count, isMeatBtw) {

  if (index >= string.length) {
    return count;
  }

  if (string[index + subIndex] === "B") {

    if (isMeatBtw) {
      count = count + 1;
    }

    return realCountSandwich(string, index, subIndex + 1, count, isMeatBtw);
  }

  if (string[index + subIndex] === "M") {
    isMeatBtw = true;
    return realCountSandwich(string, index, subIndex + 1, count, isMeatBtw);
  }

  return realCountSandwich(string, index + 1, 0, count, false)
}

function composeMessage(string, actual, expected) {
  const symbol = expected === actual ? " ✅ " : " ❌ ";
  const actualSection = `| actual : [${actual}]`;
  const expectedSection = `| expected : [${expected}]`;
  const inputSection = `[${string}]`;

  return symbol + inputSection + actualSection + expectedSection;

}

function testSandwichCount(string, expected) {
  const actual = countSandwich(string);
  const message = composeMessage(string, actual, expected);

  console.log(message);
}

function testAllCases() {
  console.log("Count sandwiches");
  testSandwichCount("BMB", 1);
  testSandwichCount("BMBMB", 3);
  testSandwichCount("BBBBB", 0);
  testSandwichCount("MMMMM", 0);
  testSandwichCount("BMMMMMB", 1);
  testSandwichCount("MBM", 0);
  testSandwichCount("", 0);
  testSandwichCount("bm", 0);
  testSandwichCount("BMMBMMB", 3);
}

function main() {
  testAllCases();
}

main();
