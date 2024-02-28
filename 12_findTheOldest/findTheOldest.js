const getAge = (person) => {
    return (person.yearOfDeath || (new Date()).getFullYear()) - person.yearOfBirth
} 

const findTheOldest = function(people) {
    return people.reduce((lastOldestPerson, thisPerson) => {
        if (!lastOldestPerson) return thisPerson;
        if (getAge(lastOldestPerson) > getAge(thisPerson)) return lastOldestPerson;
        return thisPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
