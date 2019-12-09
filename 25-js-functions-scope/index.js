
function someFunc() { }
someFunc()
/* global, function, block */

// Functions are First Class Citizens/Objects 
function multiply(multiplier) {
    return function (num) {
        console.log(num * multiplier)
    }
}

