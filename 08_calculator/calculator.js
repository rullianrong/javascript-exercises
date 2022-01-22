const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const power = (a, b) => a ** b;

const factorial = function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};