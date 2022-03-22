// XP

// Exercise 1

let x = 5;
let y = 2;

if (x > y) {
    console.log(`${x} is bigger than ${y}`)
} else {
    console.log(`${y} is bigger than ${x}`)
}


// Exercise 2

//2.2 How many letters
let newDog = "Chihuahua";
console.log(newDog.length);

//2.3 uppercase
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog = "Chihuahua") {
    console.log("I love " + newDog + " It's my favourite breed")
}   else {
    console.log(`I don't care, I prefer cats`);
}

// Exercise 3

const number = prompt("88");

// if the number is even
if(number % 2 == 0) {
    console.log("The number is even");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

// Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

//if there is no users

if (users = "null") {
    console.log("No one is online");
}






// DAILY CHALLENGE

let sentence = "the cake is not that bad, I like it"

// let wordNot
let indexWordNot = sentence.indexOf("not");
console.log(indexWordNot);

// let wordBad
let indexWordBad = sentence.indexOf("bad");
console.log(indexWordBad);

//if the word "bad" comes after the word "not" 
// --> you should replace the whole "not...bad" with "good"

if (indexWordBad > indexWordNot) {
    let newSentence = sentence.substring(0,indexWordNot) + "good" + sentence.substring(indexWordBad+3)
    console.log(`${newSentence}`);
}
// the cake is good, I like it

