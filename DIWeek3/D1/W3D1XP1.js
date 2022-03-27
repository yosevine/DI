let navbar = document.getElementById("navBar")
console.log(navbar);

// change the value of the id attribute

navbar.setAttribute("socialNetworkNavigation", "navBar");
console.log(navbar);

// add a new li 

let ulParent = document.getElementById("navBar");
let liChild = document.createElement("li");

console.log(liChild);

// create a new text with "Logout" as its specified text

let textLi = document.createTextNode("Logout");

console.log(textLi);

// append to the new li 

liChild.appendChild(textLi);
ulParent.appendChild(liChild);
console.log(liChild);
console.log(ulParent);

// append to the ul

console.log(ulParent);

// get firstElementChild

let firsttext = document.getElementById("navBar").firstElementChild.textContent;
let lasttext = document.getElementById("navBar").lastElementChild.textContent;
console.log(firsttext);
console.log(lasttext);
