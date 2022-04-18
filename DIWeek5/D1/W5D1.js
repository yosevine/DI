
// Ex1 

// The GET method - the data will appear in the query string

// Ex 2

// The POST method - will not appear in the query string, but in the body of the message

// Ex 3

let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
}

// convert from JS to JSON 
const jMarioGame = JSON.stringify(marioGame)

console.log(jMarioGame);

// pretty print JS to JSON
console.log(JSON.stringify(marioGame, null, 2));

// use web inspector to add a breakpoint

// DAILY CHALLENGE

const namex = document.getElementById("name")
const commentsx = document.getElementById("comments")
const sendButton = document.getElementById("send")
const allForms = document.querySelector("form")
// we want to submit the form - to target the specific form on the page
// if form has a name = document.forms.(name).addEventListener

allForms.addEventListener("submit", function(e) {
    e.preventDefault();
    let formInfo = {
        name : namex.value, // fill in the variable value
        comment : commentsx.value // fill in the variable value
    }

    // from JS to JSON
    const jsonForm = JSON.stringify(formInfo);

    console.log(formInfo);

})


