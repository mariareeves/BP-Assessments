// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }

    return false
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// the space complexity is O(1), it uses a constant amount of memory, regardless of the size of the input array.
