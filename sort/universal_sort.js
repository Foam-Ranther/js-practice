const lessThan = function (a, b) {
  return a < b;
}

const greaterThan = function (a, b) {
  return a > b;
}

const selectSortingLogic = function (input) {
  switch (input) {
    case "ascending":
      return greaterThan;
    case "descending":
      return lessThan;
    default:
      return greaterThan;
  }
}
const universalSort = function (data, comparisionFunction) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (comparisionFunction(data[i], data[j])) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }

  return data;
}



const main = function () {
  const data = ["hello", "world", "mega", "deb"];
  const dataNumbers = [2, 6, 34, 12, 76, 23];
  const sortingWay = prompt("Enter how you want to sort (ascending / descending)")
  const sortedArray = universalSort(dataNumbers, selectSortingLogic(sortingWay));
  console.log(sortedArray);
}

main();

