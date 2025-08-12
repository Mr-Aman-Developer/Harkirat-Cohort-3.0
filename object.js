// Ask the user for their name and store the result in the 'userName' variable.
let userName = prompt("What is your name?");

// The user's input is now stored in userName.
// If the user clicks "Cancel", userName will be null.

if (userName) { // Check if the user entered something
  console.log("Hello, " + userName + "!");
} else {
  console.log("You didn't enter a name.");
}

// You can also get numbers, but you must convert the string result.
let ageString = prompt("How old are you?");
let age = parseInt(ageString); // Convert the string "25" to the number 25

if (!isNaN(age)) { // Check if the conversion was successful
  console.log("You will be " + (age + 1) + " next year.");
} else {
  console.log("That was not a valid number.");
}