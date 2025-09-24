function decideGreetings(num) {
  switch (num) {
    case 1: return "Good morning, ";
    case 2: return "Good afternoon, ";
    case 3: return "Good night, ";

  }
}
function greetings(greeting, person) {
  return greeting + person;
}

console.log(greetings(decideGreetings(3), "Amisha"))
