// what do i want from this function ? 
// loop through start till end and print;

function loop(start, end) {
  if (start === end) {
    return; 
  }

  console.log(start);

  return printLoop(start + 1, end);
}

loop(-1,10);
