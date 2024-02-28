const fibonacci = function(x) {
    x = Number.parseInt(x);
    if (x < 0) return "OOPS";
    return fib(x);
};

const fib = function(x) {
    if (x == 0) return 0;
    if (x == 1 || x == 2) return 1;
    return fib(x-1) + fib(x-2);
}
// Do not edit below this line
module.exports = fibonacci;
