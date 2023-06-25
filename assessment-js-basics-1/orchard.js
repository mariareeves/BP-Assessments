///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55


// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// Create a variable 'totalAcres' and initialize it to 0 to store the total amount of acres picked for the week.
// iterate over the three arrays using their indexes
// for each iteration, add the corresponding values from the three arrays to the 'totalAcres' variable.
// assuming that all three arrays have the same length, we can iterate over one of the arrays to get the size of them and add them to the variable at the same time using their indexes 

let totalAcres = 0
for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
    // console.log(totalAcres)
}

console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// To calculate the average number of acres picked per day create a variable 'averageDailyAcres' and assign it the value of the total number of acres picked for the entire week, stored in the 'totalAcres' variable.
// Divide the 'totalAcres' by the length of one of the arrays , considering that all three arrays have the same length.
// This will give us the average number of acres picked per day.
let averageDailyAcres = totalAcres / fujiAcres.length
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174
let days = 0

// CODE HERE
// Write a while loop that continues to run as long as the expression is true, the value of 'acresLeft' is above 0.
// Within each iteration of the loop:
// - Increment the value of 'days' by 1 to keep track of the number of days needed.
// - Subtract the daily average (stored in the 'averageDailyAcres' variable) from the 'acresLeft' 

while (acresLeft > 0) {
    days++
    acresLeft -= averageDailyAcres
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store
    your new arrays. Make sure that you
    don't modify the original arrays
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method
    to make copies of the arrays and
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new
    values to the new arrays.
*/

// CODE HERE

// I am using map here to iterate over the original arrays and perform a specific calculation on each element - multiplying the corresponding element by the conversion rate of 6.5 tons per acre
// The new created arrays represent the daily amount of apples picked in tons for each variety.

let fujiTons = fujiAcres.map(acres => acres * 6.5)
let galaTons = galaAcres.map(acres => acres * 6.5)
let pinkTons = pinkAcres.map(acres => acres * 6.5)

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number
    into pounds -- store that number in
    the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// Initialize variables 'fujiPounds', 'galaPounds', and 'pinkPounds' to store the total pound and set to 0.
// Iterate over the arrays using a 'for' loop, multiplying each element by the conversion of 2000 pounds per ton and adding it to the total.

let fujiPounds = 0
for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i] * 2000;
}

let galaPounds = 0
for (let i = 0; i < galaTons.length; i++) {
    galaPounds += galaTons[i] * 2000;
}

let pinkPounds = 0
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i] * 2000;
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given
    at the beginning of this file to
    figure out how much you'll make
    from selling each type of apple.

    The prices are per pound and are
    written in cents.

    Log each of the profits to the
    console.
*/

// CODE HERE
// multiply the total pounds picked per variety by their respective prices.

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

// using 'toLocaleString' method to format the profits as currency values. 
// the first parameter is the 'en-US' and the second parameter an object specifying the style and currency.

console.log(`profit: ${fujiProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`);
console.log(`profit: ${galaProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`);
console.log(`profit: ${pinkProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`);


// PROBLEM 7

/*
    Add up all your profits and save
    the number to a variable called
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// summing the calculate the total profit by adding up  the individual profits together 
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(`Total profit: ${totalProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)