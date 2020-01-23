let arr = [1,6,7,3,4,8,9,2,5,10]
let arrSorted = [1,6,7,3,4,8,9,2,5,10]



// write a function that finds a number in an array of numbers


function findNum(arr, target){ // Linear Time: O(n)
    // return arr.includes(target)
    for(let i=0; i < arr.length; i++){
        console.log('running')
        if(arr[i] === target){
            return true;
        }
    }
    
}
















// Constant Time: O(1)
// Linear Time: O(n)
// Quadratic Time: O(n^2)
// LOTS OF WORSE TIMES 


const arrSum = arr => arr.reduce((a,b) => a + b, 0)


// Overall O(n) is... O(2n + 1)
// keep it to O(n) Linear Time 
function containsAverage(arr){
    // return true if the array contains its own average 
    let sum = arrSum(arr) // Linear Time: O(n)
    let average = sum / arr.length // Constant Time: O(1)
    return arr.indexOf(average) != -1 // Linear Time: O(n)
}


// CAUUUSE worst case scenario
// arr.length is 10000000000 ==> 20000000001
// arr.length is 10000000000000000000 ==> 20000000000000000001


// Pretend it was ... O(2n + 1 + n^2) simplifies to O(n^2)

// hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10)

// results [[4,8], [3,9]]
// console.log('found!')
// Quadratic Time O(n^2)  because it's nested 


function hasTargetSum(arr, target){
    // takes an array and a target, and for all pairs of numbers
    // that equal that target, console log 'FOUND'
    for(let first=0; first < arr.length; first++){
        for(let second=0; second < arr.length; second++){
            console.log('looking at', first, second)
            if(first + second === target){
                console.log('FOUND')
}}}}

// Quadratic Time O(n^2) because it's nested 
function hasTargetSumV2(arr,target){
    for(let first=0; first < arr.length; first++){
        let compliment = target - first;
        if (arr.indexOf(compliment) > -1){
            console.log('FOUND')
}}}

// reactO ==> Optimize!
let arr2 = [4,5,3,2,1,9,12,8,6]
let target = 12

function hasTargetOptimized(arr,target){
    let arrObj = {}
    for(let first=0; first < arr.length; first++){
        let compliment = target - arr[first];
        console.log('current arrObj', arrObj, '===== current number', arr[first])
        if (arrObj[compliment]){
            console.log('FOUND')
        }
        arrObj[arr[first]] = true 
        console.log('arrObj AFTER', arrObj)
    }
}



// let arrObj = {}
// arr.map((value, ind) => {
//     let compliment = target - value;
//     let somethingElse = arr.includes(compliment)
//     somethingElse ? console.log('FOUND') : null
// })




// 
// for(let ind=0; ind < arr.length; ind++){
//     arrObj[arr[ind]] = true
// }

// console.log(arrObj)
// for(let first=0; first < arr.length; first++){
//     let compliment = target - first;
//     if (arrObj[compliment]){
//         console.log('FOUND')
//     }
// }
























