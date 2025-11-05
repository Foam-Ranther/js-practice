function calculateVariance(data) {

}

function calculateMean(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }

  return sum / data.length;
}

function calculateMedian(data) {
  const sortedData = sort(data);
  const middleIndex = Math.floor(sortedData.length / 2);
  return sortedData[middleIndex];
}

function calculateMode(data) {
  const sortedData = sort(data);

  let highestFrequencyElement = sortedData[0];
  let highestFrequency = 0;
  let currentElementFreq = 1;
  let index = 1;
  let previousIndex = 0;

  while (index < sortedData.length) {
    if (sortedData[previousIndex] !== sortedData[index]) {
      if (highestFrequency < currentElementFreq) {
        highestFrequencyElement = sortedData[previousIndex];
        highestFrequency = currentElementFreq;
      }
      previousIndex = index;
      currentElementFreq = 1;
    }
    currentElementFreq++;
    index++;
  }

  return highestFrequencyElement;
}

function calculateStandardDeviation(data) {
  sumofDev
  for (let index = 0; index < data.length; index++) {

  }
}

function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }

  return data;
}

function displayData(data) {
  const mean = calculateMean(data);
  const median = calculateMedian(data);
  const mode = calculateMode(data);
  console.log("Mean : ", mean);
  console.log("Median : ", median);
  console.log("Mode : ", mode);
}

function testMode() {
  console.log(calculateMode([2, 2, 9, 7, 2, 8, 5, 8, 8, 8]));
  console.log(calculateMode([]));
  console.log(calculateMode([2, 2, 2, 2, 2, 2, 2, 2]))

}

function main() {
  const data = [2, 9, 7, 2, 8, 5, 8];
  displayData(data);
  testMode();
}

main(); 
