const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((e) => (sum += e));
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  arr.forEach((e) => (product *= e));
  return product;
};

const power = function (x, pow) {
  return x ** pow;
};

const factorial = function (n) {
  return n == 0 ? 1 : n * factorial(n - 1);
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
