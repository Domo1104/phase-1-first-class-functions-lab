// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    let newArray = drivers.slice(0, 2)
        return newArray
}

const returnLastTwoDrivers = (drivers) => {
    let newArray = drivers.slice(2)
    return newArray
}

let selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers)

const createFareMultiplier = (int) => {
    return function fareMultiplier(fare) {
        return int * fare
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(fare)(2) 
}


const fareTripler = (fare) => {
    return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}