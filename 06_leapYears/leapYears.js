const divisibleBy4 = (num) => (num % 4 == 0);
const divisibleBy100 = (num) => (num % 100 == 0);
const divisibleBy400 = (num) => (num % 400 == 0);

const leapYears = function(year) {
    // Leap years are divisible by four. 
    // However, years divisible by 100 are not leap years
    // unless they are divisible by 400
    if (divisibleBy4(year)) {
        if (divisibleBy100(year))
            if (divisibleBy400(year)) return true;
            else return false;
        else return true;
    } return false;
};

// Do not edit below this line
module.exports = leapYears;
