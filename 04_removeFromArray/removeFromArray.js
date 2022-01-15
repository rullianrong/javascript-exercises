const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1);
                //once splice is triggered array element's position will move 
                //1 less in value so I need to decrement the i iter so that it will
                //not skip the next element, a break is also applied so that it will 
                //go out of the loop and start a new comparison 
                i--
                break;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;