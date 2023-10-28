console.log(
  "Strings, Template Literals, and Conditional Statements Challenges"
);

// [CHALLENGE 1] Square Calculation
// Calculate the square of a number and implement it with additional mathematical operations.

/*
    Instructions:
    1. Variable Setup:
      Create a variable named number and assign a specific numeric value to it, e.g., 7.
    2. Square Calculation:
      Calculate the square of the number and store it in a variable.
    3. Additional Operations:
      Add 10 to the square.
      Divide the result by 2.
      Subtract 5.
    4. Log Results:
      Log the final result after performing the series of operations to the console.

    Test Data:
      Assign a specific numeric value to the number variable.
    Expected Output:
      The program should log the result of the series of operations.
*/

const number = 5;
let numberSquared = number ** 2;
numberSquared = (numberSquared + 10) / 2 - 5;
console.log(numberSquared); // 12.5

// ---------------------------------------------------------------------------------------------------
// [CHALLENGE 2] Even/Odd Check
// Determine if a number is even or odd and display the result
/*
    Instructions:
    1. Variable Setup:
      Create a variable named numberOddOrEven and assign a specific numeric value to it, e.g., 15.
    2. Even/Odd Check:
      If the number is divisible by 3 and 5, log "Divisible by 3 and 5."
      If the number is divisible by 3, log "Divisible by 3."
      If the number is divisible by 5, log "Divisible by 5."
      Otherwise, log "Not divisible by 3 or 5."
    3. Log Results:
      Log the result of the complex check to the console.

    Test Data:
      Assign a specific numeric value to the numberOddOrEven variable.
    Expected Output:
      The program should log the result of the complex check.
*/

const numberOddOrEven = 15;

if (numberOddOrEven % 3 === 0 && numberOddOrEven % 5 === 0) {
  console.log("Divisible by 3 and 5"); // Divisible by 3 and 5
} else if (numberOddOrEven % 3 === 0) {
  console.log("Divisible by 3");
} else if (numberOddOrEven % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 3 or 5");
}

// ---------------------------------------------------------------------------------------------------
// [CHALLENGE 3] Welcome Message
// Create a personalized welcome message using template literals and advanced conditional statements.

/*
  Instructions:
    1. Variable Setup:
      Create variables for the following:
        firstName: Your first name.
        birthYear: Your birth year.
        currentYear: The current year (e.g., 2023).
    2. Age Calculation:
      Calculate your age using the formula: age = currentYear - birthYear.
    3.  Welcome Message Creation:
      Create a welcome message using template literals with advanced conditional statements:
        If your age is below 18, include a message: "You are under 18 years old."
        If your age is between 18 and 30, include a message: "You are between 18 and 30 years old."
        If your age is above 30, include a message: "You are above 30 years old."
    4. Log Results:
      Log the welcome message to the console.
    
    Test Data: 
      Assign your actual first name, birth year, and the current year to the respective variables.
    Expected Output:
      The program should log the personalized welcome message based on your age.
*/

const firstName = "Ethan John";
const birthYear = 2000;
const currentYear = 2023;

const age = currentYear - birthYear;

if (age < 18) {
  console.log(`You are under 18 years old`);
} else if (age >= 18 && age <= 30) {
  console.log(`You are between 18 and 30 years old`); // You are between 18 and 30 years old
} else {
  console.log(`You are above 30 years old`);
}

// ---------------------------------------------------------------------------------------------------
// [CHALLENGE 4] Word Length Checker
// Create a program that checks the length of a word and provides feedback based on its length.
/*
  Instructions:
    1. Variable Setup:
      Create a variable named word and assign it the value "supercalifragilisticexpialidocious."

    2. Word Length Check:
      Calculate the length of the word variable using the .length property.
      Store the result in a new variable called wordLength.
    3. Feedback Based on Length:
      Implement a conditional statement to provide feedback on the word's length.
        If wordLength is less than 5 characters:
          Log the message: "The word is short."
        If wordLength is between 5 and 10 characters (inclusive):
          Log the message: "The word is of medium length."
        If wordLength is greater than 10 characters:
          Log the message: "The word is long."
    
*/

const word = "supercalifragilisticexpialidocious";
const wordLength = word.length;

if (wordLength <= 5) {
  console.log(`The word is short.`);
} else if (wordLength > 5 && wordLength < 10) {
  console.log(`The word is of medium length.`);
} else {
  console.log(`The word is long.`);
}
