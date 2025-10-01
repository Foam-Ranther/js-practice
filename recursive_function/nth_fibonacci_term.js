function nthFibonacciTerm(term) {
  return 1;
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
}

function main() {
  testAllCases();
}

main();
