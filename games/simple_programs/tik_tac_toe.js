function displayArray(array) {
  let columnString = ""; 
  for (let index = 1; index <= array.length; index++) {
    columnString += array[index - 1]; 
    if (index % 3 === 0 ) {
      console.log(columnString); 
      columnString = ""; 
    }
  }
}

function main() {
  const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]; 
  displayArray(array);
}
main(); 
