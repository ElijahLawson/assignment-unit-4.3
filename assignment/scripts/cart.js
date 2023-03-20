console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//global variables
let basket = [];
const maxItems = 5;

//addItem(item "String") pushes item into basket array.
function addItem(item) {
    if (isFull() == false) {
        basket.push(item);
        return true;
    } else { 
        return false;
    }
}

//listItems() loops over the basket array and logs each item
function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}

// empty() resets the basket array to an empty array, hence "emptying" the basket.
function empty() {
    basket = [];
}

//isFull checks the amount of items in basket against the maxItems variable, return false if the count of items in basket is less than maxItems, otherwise returns False
function isFull() {
    return (basket.length < maxItems) ? false : true;
}

//removeItem(item String) returns the same string as the input parameter at it's first found index if it is within the array, otherwise returns null
function removeItem(item) {
    return (basket.indexOf(item) >= 0) ? basket.splice(basket.indexOf(item), 1)[0] : null;
}

//-----------TESTS------------//
//Adding two items to basket, listing those items, and then emptying the basket
console.log(`Adding fruit to basket --> true`, addItem('fruit'));
console.log(`Adding eggs to basket --> true`, addItem('eggs'));
console.log(`Listing items --> fruit eggs`, listItems());
console.log(`Emptying basket --> []`, empty());
console.log(`Confirming empty basket --> []`, basket);


//isFull() function tests:
console.log('Adding two items to basket', addItem('apples'), addItem('fish'));
console.log('Items in basket --> apples fish', listItems());
console.log('Checking isFull with two items ---> false', isFull());
console.log('Adding two more items to basket', addItem('corn'), addItem('pepper'));
console.log('Checking isFull with four items ---> false', isFull());
console.log('Adding fifth item to basket', addItem('pizza'));
console.log('Checking isFull with five items ---> true', isFull());

//removeItem(item) function tests:
console.log('Removing corn item from basket --> corn', removeItem('corn'));
console.log('Listing basket after removal -->', listItems());
console.log('Attempting to remove an item not in basket --> null', removeItem('gravy'));

