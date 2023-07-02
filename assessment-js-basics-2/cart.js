///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price  //curr is always carry the value we want to do the operation, acc keeps track of the value, carried forward across iterations while performing the reduction operation.
}, 0)  // 0 is the initial value
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = ((cartTotal, couponValue, tax) => {
    const cartTotalTax = cartTotal + (cartTotal * tax)  // adding the tax in the total 
    const finalTotal = cartTotalTax - couponValue // subtracting the cupon from the new price 
    return finalTotal
})

const finalPrice = calcFinalPrice(summedPrice, 5, .06);
console.log(finalPrice);

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
The customer object will have the following properties:
fullName = customer's fullname so the restaurant can identify the customer for personalized communication and potentially deliveries. This will be a string data type
email = customer's email address, so the restaurant can send order confirmations, updates, and promotional offers to the customer. This property will be a string 
phoneNumber = to have a secondary contact. This property will be a string data type to better store different formats. (we dont want to calculate anything so another reason to choose string versus number data type)
address = this will be an array to store the customer address and within this array will contain an object containing street, city state and zipcode, in case the customer wants to add a secondary address or a new one The address allows the restaurant to delivery to their customers. Street, city and state will be strings and zipcode a number 
specialRequest = customers can provide additional instructions or preferences for their order, such as dietary restrictions or specific delivery instructions. This property will be a string 
id = to identify the customer by their unique number - this will be a number data type

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer = {
    id: 200898,
    fullName: 'Maria Reeves',
    email: 'maria@gmail.com',
    phoneNumber: '123-456-7890',
    address: [
        {
            street: '222 programmingLand',
            city: 'Longmont',
            state: 'Colorado',
            zipcode: 80501
        },

    ],
    specialRequest: 'no pickles'

}