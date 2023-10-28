console.log(
  "Switch Statement, Statements vs. Expressions, and Conditional (Ternary) Operator Challenges"
);

// ---------------------------------------------------------------------------------------------
// [CHALLENGE 1] Grading Calculator
// You are tasked with creating a grading calculator for a class. The grading system is as follows:
/*
    Students receive an "A" if their score is 90 or above.
    Students receive a "B" if their score is between 80 and 89.
    Students receive a "C" if their score is between 70 and 79.
    Students receive a "D" if their score is between 60 and 69.
    Students receive an "F" if their score is below 60.

    Instructions
        1. Create a variable called studentScore and assign it a numerical value representing a student's score (e.g., 30)
        2. Use a switch statement to determine the grade based on the studentScore.
        3. Log the grade to the console (e.g., "Your grade is B.").
    
    Test Data
        Use the following studentScore values for testing: 95, 78, 60, 88, and 45.
*/

const studentScore = 30;
// "true" as it uses conditional statement for each cases
switch (true) {
  case studentScore >= 90:
    console.log(`Your grade is A`);
    break;
  case studentScore >= 80 && studentScore <= 89:
    console.log("Your grade is B");
    break;
  case studentScore >= 70 && studentScore <= 79:
    console.log("Your grade is C");
    break;
  case studentScore >= 60 && studentScore <= 69:
    console.log(`Your score is D`);
    break;
  default:
    console.log("Your grade is F"); // (this will run)
}

// ---------------------------------------------------------------------------------------------------
// [CHALLENGE 2] Age Classifier
// You are building a program that classifies individuals into different age groups. The age groups are as follows:
/*
    "Child" for ages 0-12 (inclusive).
    "Teen" for ages 13-19 (inclusive).
    "Adult" for ages 20 and above.

    Instructions
        1. Create a variable called age and assign it a numerical value representing a person's age (e.g., 25).
        2. Use a ternary operator to determine the age group based on the age variable.
        3. Log the age group to the console (e.g., "You are a Teen.").  
    
    Test Data
        Use the following age values for testing: 7, 16, 30, 12, and 21.
*/

const age = 7;
age >= 0 && age >= 12 ? "You are a child";
