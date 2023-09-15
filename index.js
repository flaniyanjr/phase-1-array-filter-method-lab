// Code your solution here
function findMatching (driversNames, userName) {

    /*Filter has to check to see if the name in the element is equal to the 
    name passed as an argument*/
    let arrayOfMatchingNames= driversNames.filter((name) => {
        if (name.toLowerCase() === userName.toLowerCase()) {
            return name
        }
    })
    if (arrayOfMatchingNames) {
        return arrayOfMatchingNames
    }
}

function fuzzyMatch(driversNames, userLetters) {
    let length= userLetters.length
    /* Callback function needs to look at each name that is passed and check
    to see if the letters in the name that the user inputs match the letter 
    in the passed name */

    let arrayOfMatchingNames= driversNames.filter((name) => {
        /*We need the beginning letter to be there always. If the beginning letter is there, then
        we can have any subsequent letters that are in the name. If the beginning letter isn't
        there, the name shouldn't be added to the array*/
        return name.slice(0,length).toLowerCase() === userLetters.toLowerCase()
    })

    if (arrayOfMatchingNames) {
        return arrayOfMatchingNames
    }
}

function matchName(driverArray, name) {
    let nameObjects= driverArray.filter( (nameObject) => {
        if (nameObject.name.toLowerCase() === name.toLowerCase()) {
            return nameObject
        }
    })

    if (nameObjects) {
        return nameObjects
    }

}