const secondLargest = (arrayOfNumber) => {
  let intArray = arrayOfNumber.map(Number);
  let secondLargestNumber = intArray.sort(function (a, b) {
    return b - a;
  })[1];
  console.log(secondLargestNumber)
}

secondLargest([2, 8, 3, 10, 45, 1, 33]);