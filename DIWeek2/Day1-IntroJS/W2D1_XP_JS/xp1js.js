
// XP

// Exercise 1 : Your favourite food

let favfood = "pizza";
let favmeal = "dinner";

console.log(favfood);
console.log(favmeal);

let globalmeal = "I eat " + favfood + " at every " + favmeal;

console.log(globalmeal);

// Exercise 2 : Part 1 : Series

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = ["three series"]
let myWatchedSeriesSentence = ["black mirror", "money heist", "and the big bang theory"];

let globalseries = "I watched " + myWatchedSeriesLength + " : " + myWatchedSeriesSentence;

console.log(globalseries);

// Exercise 2 : Part 2 

// 1. Change the series the big bang theory to friends

myWatchedSeries.pop()
console.log(myWatchedSeries);
myWatchedSeries.push("friends")
console.log(myWatchedSeries);

// 2. Add another series at the end

myWatchedSeries.push("vikings")
console.log(myWatchedSeries);

//3. Add another series at the beginning

myWatchedSeries.unshift('rita');
console.log(myWatchedSeries);

//4. Delete the series black mirror

console.log(myWatchedSeries.indexOf("black mirror"));

myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1)
console.log(myWatchedSeries);

//5. console.log the third letter of the series money heist

let letter = "money heist";

console.log(letter.charAt(3));

//6. final consol.log

console.log(myWatchedSeries);

// Exercise 3

let celcius = 28
console.log(celcius);

let fahrenheit = 28 / 5 * 9 + 32
console.log(fahrenheit);

// Exercise 4

//4.1 prediction: 34 + 21 = 55
//4.1 actual

let c;
let a = 34;
let b = 21;
console.log(a+b);

//4.2 prediction: 2 + 21 = 24
//4.2 actual

//4.3 the value of c is 0

//4.4 console.log(3 + 4 + '5');
//outcome is 7





// Exercise 5

// typeof(15)
// Prediction: 
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean
// Actual:

typeof(1 != 2)
// Prediction: 
// Actual:

"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual:



// Exercise 6

5 + "34"
// Prediction:
// Actual:

5 - "4"
// Prediction:
// Actual:

10 % 5
// Prediction:
// Actual:

5 % 10
// Prediction:
// Actual:

"Java" + "Script"
// Prediction:
// Actual:

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction:
// Actual:

true + true
// Prediction:
// Actual:

true + false
// Prediction:
// Actual:

false + true
// Prediction:
// Actual:

false - true
// Prediction:
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction:
// Actual:

"Bob" - "bill"
// Prediction:
// Actual:





// DAILY CHALLENGE

// Exercise 1 - Daily Challenge

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1. Remove banana from the array

let firstItem = fruits [0];
console.log(firstItem);


let secondItem = fruits [1];
console.log(secondItem);

fruits.splice(0,1);
console.log(fruits);

//2. Sort the array in alphabetical order

fruits.sort();
console.log(fruits);

//3. Add Kiwi to the end of the array
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

//4. Remove Apples from the array

console.log(fruits);
fruits.shift();
console.log(fruits);

//5. Sort array in reverse order

fruits.sort();
console.log(fruits);



// Exercise 2 Daily Challenge

let morefruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(morefruits);

