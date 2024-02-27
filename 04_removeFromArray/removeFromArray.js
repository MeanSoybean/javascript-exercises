
const removeFromArray = function(array, ...elementsToRemove) {
    outputArray = [];
    array.forEach((value) => {
        if (!(elementsToRemove.includes(value))) {
            outputArray.push(value);
        }
    })
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
