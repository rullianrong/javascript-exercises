const repeatString = function(string, num) {
    let repeatingString = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            repeatingString += string;
        }
        return repeatingString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;