/*
    CIT 281 Project 2
    Name: Brett Colvin
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter()
}

console.log(getSortedString(getRandomString(10, 20)));

//Returns a singlr lower case letter
function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//Returns a random string
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
return result;
}

//Returns a string in ascending order
function getSortedString(string) { return string.split('').sort().join('');}
