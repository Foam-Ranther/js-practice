function nthFibonacciTerm(term) {
  if (term === 2) {
    return 1;
  }

  if (term === 1) {
    return 0;
  }

  return nthFibonacciTerm(term - 1) + nthFibonacciTerm(term - 2);
}

function composeMessage(term, actual, expected) {
  const symbol = expected === actual ? " ✅ " : " ❌ ";
  const actualSection = `| actual : [${actual}]`;
  const expectedSection = `| expected : [${expected}]`;
  const inputSection = `[${term}]`;

  return symbol + inputSection + actualSection + expectedSection;
}

function testNthFibonacciTerm(term, expected) {
  const actual = nthFibonacciTerm(term);
  const message = composeMessage(term, actual, expected);
  
  console.log(message);
}

function testAllCases() {
  console.log("Nth fibonacci term");
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
}

function main() {
  testAllCases();
}

main();
