function printFibonacciSeries(term) {
  return "0";
}

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

function testPrintFibonacciSeries(term, expected) {
  const actual = printFibonacciSeries(term);
  const message = composeMessage(term, actual, expected);
  
  console.log(message);
}

function testAllCases() {
  console.log("fibonacci series : ");
  testPrintFibonacciSeries(1, "0");
}

function main() {
  testAllCases();
}

main();
