function maxValueIndex(data, end) {
  let maxIndex = 0;
  for (let index = 0; index < end; index++) {
    if (data[maxIndex] < data[index]) {
      maxIndex = index;
    }
  }

  return maxIndex;
}

function sort(data) {
  for (let i = 0; i < data.length; i++) {
    const max = maxValueIndex(data, data.length - i);
    const swapableIndex = data.length - i - 1;
    const temp = data[swapableIndex];
    data[swapableIndex] = data[max];
    console.log("-->", data[swapableIndex]);
    data[max] = temp;
  }
  return data;
}

function main() {
  const data = [2, 9, 7];
  // [2, 7, 9]

  const sortedData = sort(data);
  for (let index = 0; index < sortedData.length; index++) {
    console.log(sortedData[index]);
  }
}

main(); 
