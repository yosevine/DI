
// CONDITIONALS

// Course notes
// Ex 1

let driveAge = 19

if (driveAge < 18) {
    console.log("Sorry! no drive for you!")
}   else if (driveAge = 18) {
    console.log("Yes! finally you can drive!")
}   else {
    console.log("Just drive!")
}

// Ex 2.

// 4 = exactly !

// Exercise XP

// Ex. 1

let x = 20;
let y = 9;

if (x > y) {
    console.log("x is the biggest number");
}   

// Ex. 2

let newDog = "Chihuahua"

// how many letters

let newDogLetters = newDog.length;
console.log(newDogLetters);

// uppercase and lowercase

console.log(newDog.toLocaleUpperCase());

console.log(newDog.toLocaleLowerCase());

// equal to

if (newDog = "Chihuahua") {
    console.log("I love Chihuahuas, it's my favourite dog breed")      
}
else {
    console.log("I don't care, I prefer cats")
}


// Ex. 3

/*let p = prompt("Enter a number");

if (p % 2 == 0) {
    p = (`${p} is an even number`)
    console.log(p);
}   else {
    p = (`${p} is an odd number`);
    console.log(p);
}*/

// Ex. 4 Group chat


// if there is no users

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log(users.length);

let userlength = users.length;
console.log(userlength);

// 

if (userlength = 0) {
    console.log("no one is online")
}
else if (userlength = 1) {
    console.log("<name_user> is online")
}
else if (userlength = 2) {
    console.log("<name_user> and <name_user2> are online") 
}   
else if (userlength > 2) {
    console.log("and more are online")
}

// XP GOLD

// Ex. 1

/*

let userLanguage = prompt("Which language do you speak?");

switch (userLanguage) {
        
        case "english":
            alert("Hello")
            break;
        case "french":
            alert("Bonjour")
            break;
        case "hebrew":
            alert("Shalom")
            break;
        default:
            alert("0100100010101")
}


console.log(userLanguage);

*/


// Ex. 2 the Grade Assigner

function studentGrade(val) {

    if (val > 90) {
        console.log("A")
    } 
    else if (val > 80 && val <= 90) {
        console.log("B")
    }
    else if (val >= 70 && val <=80) {
        console.log("C")
    }
    else if (val <70) {
        console.log("D")
    }
}

console.log(studentGrade(92));

// Ex. 3 Verbing

/*
let verbx = prompt("Please enter a verb");
console.log(verbx.length);

let verbo = verbx.length;

function verby (verbo) {
    if (verbo >= 3) {
        console.log(`verbx + "ing"`)
    }
}

console.log(verby());
*/

let verb = prompt("Please enter a verb");
let verbc = verb.length;
let verbi = verb.indexOf("ing");

function fverb() {
    if (verbc >= 3 && verbi = 0) {
        let fverb = verb + "ing"
        console.log(fverb);
    }
}

// DAILY CHALLENGE

let sentence = "The cake is not that bad, I like it"
let wordNot = sentence.indexOf("not");
console.log(wordNot);
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

let newSentence = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad+3);
console.log(newSentence);