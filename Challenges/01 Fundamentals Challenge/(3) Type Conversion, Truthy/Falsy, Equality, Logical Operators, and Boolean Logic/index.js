console.log(
  "Type Conversion, Truthy/Falsy, Equality, Logical Operators, and Boolean Logic"
);

// [CHALLENGE 1] Type Converter
// Convert a number and a string to their respective data types and perform operations.

/*
    Instructions:
        Variable Setup:
            Create a variable named numberString and assign it the string value "123".
            Create a variable named stringNumber and assign it the number value 456.
        Type Conversion:
            Convert numberString to a number type and store it in a variable named convertedNumber.
            Convert stringNumber to a string type and store it in a variable named convertedString.
        Operations:
            Add convertedNumber and stringNumber and store the result in a variable named sum.
            Concatenate convertedString and numberString and store the result in a variable named concatenation.
        Log Results:
            Log the values of convertedNumber, convertedString, sum, and concatenation to the console.
        
        Test Data:
            Use numberString with the value "123" and stringNumber with the value 456.
*/

const numberString = "123";
const stringNumber = 456;

const convertedNumber = Number("123");
const convertedString = String(456);

sum = convertedNumber + convertedString;
concatenation = convertedString + numberString;
console.log(convertedNumber, convertedString, sum, concatenation); // 123(number) 456 123456 456123

// --------------------------------------------------------------------------------------------------
// [CHALLENGE 2] Truthy or Falsy Checker
// Determine if given variables are truthy or falsy.
/*
    Instructions:
        Variable Setup:
            Create variables named variable1, variable2, and variable3 and assign them values of different data types (e.g., number, string, boolean).
        Check Truthy or Falsy:
            Implement conditional statements to check if each variable is truthy or falsy.
            Log the result for each variable to the console using a clear message (e.g., "variable1 is truthy").
        
        Test Data:
            Use variable1 with a boolean value (true), variable2 with a number value (0), and variable3 with a string value ("Hello").
*/

const variable1 = true;
const variable2 = 0;
const variable3 = "Hello";

console.log(Boolean(variable1)); // true
console.log(Boolean(variable2)); // false
console.log(Boolean(variable3)); // true

// ---------------------------------------------------------------------------------------------------
// [CHALLENGE 3] Equality Checker
// Compare values using equality operators and determine if they are equal or not.

/*
    Instructions:
        Variable Setup:
            Create variables value1 and value2 and assign them values of different data types (e.g., number, string, boolean).
        Equality Check:
            Implement conditional statements to check if value1 is equal to value2 using both loose (==) and strict (===) equality operators.
            Log the results of these comparisons to the console.

        Test Data: Use value1 with the value "123" and value2 with the value 123.
*/

const value1 = "123";
const value2 = 123;

console.log(value1 == value2); // true
console.log(value1 === value2); // false

// -------------------------------------------------------------------------------------------------
// [CHALLENGE 4] Logical Operator Tester
// Use logical operators to perform logical operations and determine the results.

/*
    Instructions:
        Variable Setup:
            Create variables bool1 and bool2 and assign them boolean values (true or false).
        Logical Operations:
            Implement logical operations using bool1 and bool2:
                Perform an AND operation and store the result in a variable named resultAnd.
                Perform an OR operation and store the result in a variable named resultOr.
                Perform a NOT operation for each variable and store the results in variables named resultNot1 and resultNot2.
        Log Results:
            Log the values of resultAnd, resultOr, resultNot1, and resultNot2 to the console.
        Test Data:
            Use bool1 with the value true and bool2 with the value false.
*/

const bool1 = true;
const bool2 = false;

const resultAnd = bool1 && bool2;
const resultOr = bool1 || bool2;
const resultNot1 = !bool1;
const resultNot2 = !bool2;

console.log(resultAnd, resultOr, resultNot1, resultNot2); // false true false true

// ----------------------------------------------------------------------------------------------------
// [CHALLENGE 5] Boolean Logic Check
// Check if a user meets certain conditions based on their age and membership status.

/*
    Instructions:
        Variable Setup:
            Create variables named age and isMember and assign them values. age represents the user's age (a number), and isMember represents their membership status (a boolean).
        Conditions:
            Implement conditional statements to check the following conditions:
                If the user is 18 years or older and is a member, log the message: "You have access to all features."
                If the user is 18 years or older but is not a member, log the message: "You have access to limited features."
                If the user is younger than 18 and is a member, log the message: "You have access to limited features."
                If the user is younger than 18 and is not a member, log the message: "You have no access."
        Test Data:
            Use age with the value 20 and isMember with the value true.
*/

const age = 20;
const isMember = true;

if (age >= 18 && isMember) {
  console.log(`You have access to all features`);
} else if (age >= 18 && !isMember) {
  console.log("You have access to limited features.");
} else if (age < 18 && isMember) {
  console.log("You have acces to limited features");
} else {
  console.log(`You have no access`);
}
