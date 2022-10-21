const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2); 
}

const returnLastTwoDrivers = function (array) {
    return array.slice(2); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return ((fare) => int * fare)
}

const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function (fare) {
    return fare * 3
}

function selectDifferentDrivers(array, cb) {
    return cb(array)
}
