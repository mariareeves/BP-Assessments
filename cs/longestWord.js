// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function longestWord(arr) {
    let longest = 0
    for (let i = 0; i < arr.length; i++) {
        const currentWord = arr[i].length
        if (currentWord > longest) {
            longest = currentWord
        }
    }
    return longest
}

console.log(longestWord(["hi", "hello"]))


// space complexity is O(1), the memory usage does not grow with the size of the input array.