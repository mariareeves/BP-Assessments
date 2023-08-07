// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


function hasUniqueChars(word) {

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false
            }
        }
    }
    return true
}


console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars("Moonday"))

// the space complexity is O(n) since the space usage increases linearly with the size of the input string.