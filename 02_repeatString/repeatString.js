const repeatString = function(string, amount) {
    if (amount == 0) return "";
    if (amount == 1) return string;
    if (amount < 0) return "ERROR";
    return string.repeat(amount);
};

// Do not edit below this line
module.exports = repeatString;
