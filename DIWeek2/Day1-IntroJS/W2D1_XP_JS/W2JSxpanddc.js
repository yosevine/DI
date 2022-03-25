// Week2 Day1 - JavaScript intro

// Introduction to JavaScript
// Ex. 1
var addressNumber = 88
var addressStreet = "BenYehuda"
var country = "Israel"

var globalAddress = (`I live in ${addressNumber} ${addressStreet} in ${country}`)

console.log(globalAddress);

// Ex. 2
var birthYear = 1992
var futureYear = 2022
var Age = futureYear-birthYear
var globalYear = (`In ${futureYear} I will be ${Age}`)

console.log(globalYear);

// ARRAYS

// Ex. 1

let animals = ["alpaca", "whaleshark", "koala", "orangutan"];

// display whaleshark
console.log(animals[1]);

// add kipod and remove koala

let removed = animals.splice(-2, 1, "kipod");
console.log(removed);
console.log(animals);

// display array length

let aanimals = animals.length
console.log(aanimals);

// USER INTERFACE FUNCTION

/* alert("Hello");

let yourAge = prompt("How old are you?", 20);
console.log(yourAge);
alert(`You are ${yourAge} years old`);

let isBoss = confirm(`Are you the boss?`);
alert(isBoss); */

// XP exercises

// Ex. 1 - your favourite food

var favFood = "pizza"
var favMeal = "dinner"

var favAll = (`I eat ${favFood} at every ${favMeal}`);
console.log(favAll);

// Ex. 2 - series
// Part 1

let myWatchedSeriesLength = ["Vikings", "Rita", "TheClub"]
let myWatchedSeriesSentence = (`${myWatchedSeriesLength[0]}, ${myWatchedSeriesLength[1]} and ${myWatchedSeriesLength[2]}`);
let finalSentence = (`I watched 3 series : ${myWatchedSeriesSentence}`)
console.log(myWatchedSeriesSentence);
console.log(finalSentence);

// Part 2

// change TheClub to Friends

let myNewWatchedSeriesLength = myWatchedSeriesLength.splice(2, 1, "Friends");
console.log(myNewWatchedSeriesLength);
console.log(myWatchedSeriesLength);

// at the end of the array, add another series

let myRecentWatchedSeriesLength = myWatchedSeriesLength.push("Anna");
console.log(myRecentWatchedSeriesLength);
console.log(myWatchedSeriesLength);

//add at the beginning, add another series

let BeginningMyWatchedSeriesLength = myWatchedSeriesLength.unshift("Game of Thrones");
console.log(BeginningMyWatchedSeriesLength);
console.log(myWatchedSeriesLength);

// delete Vikings

let aNewWatchedSeriesLength = myWatchedSeriesLength.splice(1, 1);
console.log(aNewWatchedSeriesLength);
console.log(myWatchedSeriesLength);

// console.log the 3rd letter of series Rita

let charRita = myWatchedSeriesLength[1];
let letter = charRita.charAt(2);

console.log(letter);

// all modifications
console.log(myWatchedSeriesLength);

// Ex. 3 Temperature Converter

var celc = 29

var fahr = celc / 5 * 9 + 32
console.log(fahr);

var cf = (`${celc} celcius is ${fahr} fahrenheit`);
console.log(cf);


// Exercise XP GOLD

// Ex. 1 Favourite color

let sentence = ["my", "favourite", "color", "is", "blue"];
console.log(sentence.join(' '));

// Ex. 2 MIX UP

let str1 = "mix";
let str2 = "pod";

let newstr1 = str1.slice(0,2);
let str11 = str1.slice(0,2) + str2.charAt(2);
console.log(str11); // mi

let newstr2 = str2.slice(0,2);
let str22 = str2.slice(0,2) + str1.charAt(2);
console.log(str22);

let finalmix = (`${str11} ${str22}`);
console.log(finalmix);

// pox mid

// Ex. 3 CALCULATOR

//let x,y;
//x = parseFloat(parseInt(prompt('Enter a first number')));
//y = parseFloat(parseInt(prompt('Enter a second number')));
//let z = x + y;
//let a = x - y;
//let b = x * y;
//let c = x / y;

/* alert("the sum of the numbers is " + z);
alert("the difference of the numbers is " + a);
alert("the product of the numbers is " + b);
alert("the division of the numbers is " + c);*/

// XP NINJA

// Ex. 1 Evaluation

// Ex. 2 Ask for numbers

// Ex. 3 Find Nemo



//n = prompt("give a sentence containing Nemo");

//let nemo = n.indexOf("nemo");

// let whereisnemo = (`I found Nemo at ${nemo}`)
// console.log(whereisnemo);

// Ex. 4. Boom






// DAILY CHALLENGE

// Ex. 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana

fruits.shift();

console.log(fruits);

// Sort in alphabetical order

fruits.sort();
console.log(fruits);

// add Kiwi in the end

fruits.push("Kiwi");
console.log(fruits);

// remove apple

fruits.splice(0,1);
console.log(fruits);

// sort in reverse order

fruits.reverse();
console.log(fruits);


// Ex. 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);






