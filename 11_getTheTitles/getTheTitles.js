const getTheTitles = function(myArray) {
    let res = [];
    myArray.forEach((book) => {
        res.push(book.title);
    });
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
