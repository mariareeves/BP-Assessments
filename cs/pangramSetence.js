// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    // Convert the input string to lowercase to make it case-insensitive
    const newStr = str.toLowerCase();

    // Initialize an array to keep track of the letters present in the sentence
    const alphabet = Array(26).fill(false);

    // Iterate through each character in the string and mark the corresponding letter in the alphabet array
    for (let i = 0; i < newStr.length; i++) {
        const char = newStr.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            // char is a lowercase letter between 'a' and 'z'
            alphabet[char - 97] = true;
        }
    }

    // Check if all letters of the alphabet are present in the sentence
    for (const letter of alphabet) {
        if (!letter) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

console.log(isPangram("I like cats, but not mice"))


// the space complexity is O(1). The output of the function is binary, and it doesn't create any additional data structures or consume memory that scales with the input size.