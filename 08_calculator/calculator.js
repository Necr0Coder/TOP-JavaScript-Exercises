const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let sum = a - b;
  return sum;
};

const sum = function ([...args]) {
  let result = args.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function ([...args]) {
  let result = args.reduce((sum, current) => sum * current, 1);
  return result;
};

const power = function (a, b) {
  let result = Math.pow(a, b);
  return result;
};

const factorial = function (n) {
  //answer from TOP solutions.  factorial equation: n * (n-1).  comments are mine.

  if (n === 0) return 1; // 0 * (0 - 1)  equals 1
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
