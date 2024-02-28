const palindromes = function(s) {
    const regex = /[a-z0-9]/gi;
    const alphaOnly = s.match(regex);
    const forward = alphaOnly.join('').toLowerCase();
    const backward = alphaOnly.toReversed().join('').toLowerCase();
    return forward == backward;
};

// Do not edit below this line
module.exports = palindromes;
