//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console

//! log into the console: Hello world!
console.log("Hello world!")

//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */
//! Write code here
let tall = y+x;
console.log(`Resultatet er: ${tall}`);


//* Assignment 3:
// Use double operators to solve the parts below:
// Incrementing a number by 1.
//! Write code here
tall++;
console.log(tall)

// Decrementing a number by 1.
//! Write code here 
tall--;
console.log(tall)

// Multiplying a number by itself.
//! Write code here
tall*=tall;
console.log(tall)

// Dividing a number by itself.
//! Write code here
tall/=tall;
console.log(tall)

//* Assignment 4:
/* Make an if else statement that returns a random string */
//! Write code here
let bokstaver = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
if (bokstaver.length) {
    let randomBokstaver = bokstaver[Math.floor(Math.random()*bokstaver.length)]
    console.log(randomBokstaver)   
}

//* Assignment 5:
/* Make a function that uses a parameter to check if a number is odd or even */
//! Write code here
function evenOrOdd(tall) {
    if (tall % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOrOdd(3084))

//* Assigment 6:
/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */

//! Write code here
const userMale = true;
const userTitle = userMale ? "Mr." : "Mrs." ;
console.log(userTitle);

//* Assigment 8:
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

//! Write code here
function greeting(name, number) {
    if (number <= 6) {
        return `Good night ${name}`
    }  else if (number <= 12) {
        return `Good morning ${name}`
    } else if (number <= 18) {
        return `Good day ${name}`
    } else if (number <= 24) {
        return `Good evening ${name}`
    } else {
        return `Invalid time`
    }
}

console.log(greeting("Gunnar", 1))
console.log(greeting("Gunnar", 7))
console.log(greeting("Gunnar", 13))
console.log(greeting("Gunnar", 23))
console.log(greeting("Gunnar", 25))

//* Assignment 9:
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

//! Write code here
const checkNumber = (number1, number2) => Math.max(number1,number2)/Math.min(number1,number2) 
   
console.log(checkNumber(24,13));


//* Assignment 10:
/* Make a function that uses Switch/Case or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//! Write code here
// characters and their description
const characters = [{
    name: "Rudy",
    species: "Deer",
    description: "Rudy has a red nose. He is clumsy.",
    actions: [
        "Rudy fell on a banana peel, he is ok. But the game is over.",
        "Rudy fell down from a high place, we still dont know where Rudy is. but its probably ok.",
        "You found a disco room. Sadly Rudy loves disco and is now dancing.",
        "Rudy got engtangled in a bunch of helium balloons, he is going on a new adventure in space. Bye Rudy.",
        "Rudy saw a butterfly, Rudy will now follow the butterfly to the end of the world :)",
        "You found a button. Rudy pressed it. Nothing happened.",
        "Rudy fell over. He lost all motivation and will instead stay horizontal staring at the sky.",
        "You found a teaparty. Rudy liked this. Rudy is staying.",
        "You found an oversized jenga game. Rudy tried playing it. But Rudy lost and the jenga tower fell over him, Rudy is now sad."
    ]
},
{
    name: "Milo",
    species: "Cat",
    description: "Milo doesn't seem to acknowledge you",
    actions: [
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo doesn't acknowledge you.",
        "Milo went to sleep. Game Over."
    ]
},
{
    name: "Cluck Norris",
    species: "Chicken",
    description: "Cluck Norris is just a chicken, he doesn't understand why he is here",
    actions: [
        "Cluck-ity cluck, peck-peck-peck!",
        "Bawk-bawk, scratch-scratch!",
        "Cluck-a-doodle-doo, flap-flap!",
        "Bwok-bwok, peckity-peck!",
        "Chicka-chicka, cluckity-cluck!",
        "Brawk-brawk, flap-flap!",
        "Cluck-cluck, scratch-scratch!",
        "Bok-bok, peck-peck-peck!",
        "Chick-chick, cluck-cluck!",
    ]
}];

//Get assigned a character and their description at random
let getCharacter = characters[Math.floor(Math.random()*characters.length)]
console.log(`RELOAD TO GET NEW CHARACTER AND OUTCOME!
CHARACTER: 
Name: ${getCharacter.name}
Species: ${getCharacter.species}
Description: ${getCharacter.description}`);

//Character action
function randomAction(){
    if (getCharacter.name === "Rudy"){
    let getAction = getCharacter.actions[Math.floor(Math.random()*getCharacter.actions.length)]
    return getAction
    } else if (getCharacter.name === "Milo"){
        let getAction = getCharacter.actions[Math.floor(Math.random()*getCharacter.actions.length)]
        return getAction
} else {
    let getAction = getCharacter.actions[Math.floor(Math.random()*getCharacter.actions.length)]
    return getAction
}
}

console.log(`ACTION:
${randomAction()}`);

//* BAONUS assignment:
/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

//! Write code here 

function coolMaker(tekst) {
    if (typeof tekst === "string"){
        return`😎${tekst}😎`
    } else if (typeof tekst === "number"){
        return`😎${tekst*2}😎`
    } else if (typeof tekst === "boolean"){
        return tekst ? `😎Yeah😎` : `😎Chill😎`
    } else {
        return `😎Primitive values only😎`
    }
}
console.log(coolMaker()); 
