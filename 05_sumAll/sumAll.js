function isInvalid(x) {
    if ((typeof x) !== "number") return true;
    if (x < 0) return true;
    return false;
}

const sumAll = function(a, b) {
    let sum = 0;
    if (isInvalid(a) || isInvalid(b)) return "ERROR";
    [a, b] = (a > b) ? [b, a] : [a, b];
    for (i = a; i <= b; i++) sum += i;
    return sum;
    // 
};

// Do not edit below this line
module.exports = sumAll;
