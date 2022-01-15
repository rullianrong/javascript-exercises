const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if ((firstNum < 0 || secondNum < 0) ||
        ((typeof(firstNum) != "number") || (typeof(secondNum) != "number"))) {
        return "ERROR";
    } else if (firstNum > secondNum) {
        while (firstNum >= secondNum) {
            sum += secondNum;
            secondNum++;
        }
    } else {
        while (firstNum <= secondNum) {
            sum += firstNum;
            firstNum++;
        }
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;