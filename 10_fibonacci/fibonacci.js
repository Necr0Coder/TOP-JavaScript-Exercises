const fibonacci = function (position) {
  // A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

  if (position < 0) {
    return "OOPS";
  }
  let a = 1,
    b = 0,
    temp;

  for (i = 1; i <= position; i++) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
