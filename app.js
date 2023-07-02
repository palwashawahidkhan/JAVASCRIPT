// chapter 21 to 25



    
        let a = prompt("Enter your first name");
        let b = prompt("Enter your last name");
        let c = a + " " + b;

        window.addEventListener("DOMContentLoaded", function() {
            let heading = document.querySelector("h1");
            heading.innerHTML = "Welcome to my site, " + c;
        });
    


// question 2

console.log(i);


// question 3

function findIndex(character) {
    const word = "pakistani";
    return word.indexOf(character);
  }
  
  // Example usage
  const characterToFind = "n";
  const index = findIndex(characterToFind);
  document.write(`The index of '${characterToFind}' in 'pakistani' is ${index}.`);
  

  // question 4


// function findLastIndex(character) {
//   const word = "hello world";
//   return word.lastIndexOf(character);
// }

// const characterToFind = "l";
// const lastIndex = findLastIndex(characterToFind);

// document.write(`The last index of '${characterToFind}' in 'hello world' is ${lastIndex}.`);


// question 5


function findCharacterAtIndex(index) {
    const word = "pakistani";
    return word.charAt(index);
  }
  
  const indexToFind = 3;
  const character = findCharacterAtIndex(indexToFind);
  
  document.write(`The character at index ${indexToFind} in 'pakistani' is '${character}'.`);
   
  
  // question 6

  const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const fullName = firstName.concat(" ", lastName);
const greeting = "Hello, " + fullName + "!";

document.write(greeting);


// question 7

const word = "hyderabad";
const replacedWord = word.replace("hyder", "islam");

document.write(`Original Word: ${word}<br>Replaced Word: ${replacedWord}`);


// question 8

// const sentence = "Ali and Saim are best friends. They play football together.";
// const replacedSentence = sentence.replace("and", "&");

// document.write(`Original Sentence: ${sentence}<br>Replaced Sentence: ${replacedSentence}`);


// question 9

const number = 472;

// Convert number to a string
const convertedString = number.toString();

// Display the type of change
console.log(`Type of change: ${typeof convertedString}`);

// Display the converted string and the unchanged result
console.log(`Converted String: ${convertedString}`);
console.log(`Unchanged Result: ${number}`);


// question 10

// const userInput = prompt("Enter a sentence or word:");
// const uppercaseInput = userInput.toUpperCase();

// document.write(`Original Input: ${userInput}<br>Uppercase Input: ${uppercaseInput}`);


// question 11

// function toTitleCase(input) {
//     return input.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
//   }
  
//   const userInput = prompt("Enter a sentence or word:");
//   const titleCaseInput = toTitleCase(userInput);
  
//   document.write(`Original Input: ${userInput}<br>Title Case Input: ${titleCaseInput}`);
  

// question 12

const floatNumber = 35.36;
const stringNumber = floatNumber.toString().replace(".", "");

document.write(`Original Float Number: ${floatNumber}<br>String Number without Decimal Point: ${stringNumber}`);


// question 13

const username = prompt("Enter your username:");
const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

if (specialChars.test(username)) {
  const invalidChars = [];
  for (let i = 0; i < username.length; i++) {
    const charCode = username.charCodeAt(i);
    if (specialChars.test(username[i])) {
      invalidChars.push(`${username[i]} (Character code: ${charCode})`);
    }
  }
  alert(`Invalid username! Please enter a valid username without special characters.\nInvalid characters: ${invalidChars.join(", ")}`);
} else {
  alert(`Username: ${username}`);
}


// question 14

// const items = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Enter an item to search:");

// const searchResult = items.find(item => item.toLowerCase() === userInput.toLowerCase());

// if (searchResult) {
//   alert(`The item "${userInput}" is found in the list.`);
// } else {
//   alert(`The item "${userInput}" is not found in the list.`);
// }


// question 15

const password = prompt("Enter a password:");
const hasAlphabetsAndNumbers = /[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(password);
const doesNotStartWithNumber = /^[^0-9]/.test(password);
const isAtLeast6CharactersLong = password.length >= 6;

if (hasAlphabetsAndNumbers && doesNotStartWithNumber && isAtLeast6CharactersLong) {
  alert("Valid password!");
} else {
  alert("Invalid password! Please enter a valid password.");
}


// question 16

var university = "University of Karachi";
var array = university.split(" ");

document.write("Array Elements: " + array.join(", "));


// question 17

const userInput = prompt("Enter a string:");
const lastCharacter = userInput.slice(-1);

alert(`Last character: ${lastCharacter}`);


// question 18

const sentence = "The quick brown fox jumps over the lazy dog";
const wordToCount = "the";

const regex = new RegExp(`\\b${wordToCount}\\b`, "gi");
const count = (sentence.match(regex) || []).length;

alert(`Number of occurrences of "${wordToCount}": ${count}`);


