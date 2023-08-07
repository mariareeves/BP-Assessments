const perf = require('execution-time')();


function doublerAppend(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// Results for the extraLargeArray
// insert 703.089709 ms
// append 1.4905 ms

// Results for the largeArray
// insert 6.488583 ms
// append 382.917 μs

// Results for the mediumArray
// insert 120 μs
// append 79.542 μs


// Results for the smallArray
// insert 21.5 μs
// append 88.125 μs

// Results for the tinyArray
// insert 14.667 μs
// append 43.917 μs