const fibonacci = function (position) {
  // A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

  let num;
  let array = [];
  let prevNum = array[(-2, -1)];

  for (i = 0; i < position; i++) {
    array.push((i += prevNum));
  }
  console.log(array);
  return array.pop();
};

// Do not edit below this line
module.exports = fibonacci;
