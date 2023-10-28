console.log("Variables, Calculations, and Logic Challenges");
// [CHALLENGE 1] Calculate restaurant Bill
// Calculate the total bill for a restaurant meal, including tips.\

/*
    1. Create variables for the following values:
        mealPrice: The price of the meal before tip. Set it to 50.00.
        tipPercentage: The tip percentage as a decimal. Set it to 0.15 (which represents 15%).
        numberOfPeople: The number of people sharing the bill. Set it to 4.
    2.  Calculate the total tip amount and the total bill amount for the group using the provided values.
    3.  Calculate the total tip amount by multiplying mealPrice by tipPercentage.
    4.  Calculate the total bill amount by adding mealPrice and totalTip.
    5.  Log the total bill amount to the console, rounding it to two decimal places using the toFixed() method.

    Test Data: 
    mealPrice: 50.00
    tipPercentage: 0.15
    numberOfPeople: 4

    Expected Output:
        The program should log the total bill amount to the console in the format "Total bill amount: $xx.xx" (rounded to two decimal places).
*/

const mealPrice = 50;
const tipPercentage = 0.15;
const numberOfPeople = 4;

const totalTip = mealPrice * tipPercentage;
const totalBill = totalTip + mealPrice;
console.log(`Total bill amount: ${totalBill.toFixed(2)}`); // Total bill amount: 57.50

// ---------------------------------------------------------------------------------------------------------
// [CHALLENGE 2] Calculate Age Difference
/*
    1.Variable Setup:
        Create variables to store the birth years of two people. You can name them birthYearEthan and birthYearAnna.
    2. Age Calculation:
        Calculate the age of each person using the current year. Assume the current year is currentYear = 2023.
         Use the formula: age = currentYear - birthYear to calculate their ages.
    3.Age Difference Calculation:
        Calculate the age difference between the two people.
    4. Legal Age Check:
        Determine if both people are of legal age, which is defined as 18 years or older.
    5. Log Result:
        Log the result of the legal age check to the console. Use a clear message to indicate whether both people are of legal age.

        
    Test Data:
        Assume currentYear is 2023.
        Provide specific birth years for birthYearEthan and birthYearAnna.
        Expected Output:

The program should log a message indicating whether both people are of legal age.
*/
const currentYear = 2023;
const birthYearEthan = 2000;
const birthYearAnna = 2002;

// Calculate the ages of Ethan and Anna
const ageEthan = currentYear - birthYearEthan;
const ageAnna = currentYear - birthYearAnna;

console.log(ageEthan, ageAnna); // 23, 21

// Calculate the age difference
const ageDifference = ageEthan - ageAnna;

console.log(ageDifference); // 2

// Check if both are of legal age
const ifLegalAge = ageAnna >= 18 && ageEthan >= 18;
console.log(`Both Ethan (${ageEthan}) and Anna (${ageAnna}) are of legal age`); // Both Ethan (23) and Anna (21) are of legal age

// --------------------------------------------------------------------------------------------------------
// [Challenge 3] String Manipulation
// Manipuate and display strings using variables and string concatenation.

/*
    1.Variable Setup:
        Create a variable named firstName to store your first name.
        Create a variable named lastName to store your last name.

    2. Full Name Concatenation:

        Concatenate the firstName and lastName variables to create a full name.
    3. Greeting Message Creation:
        Create a greeting message using the full name. The message should be in the format "Hello, [Full Name]!".
        Use string concatenation to combine the "Hello, " text with the full name.
    4. Log Result:
         Log the greeting message to the console.

    Test Data:
    Assign your actual first name and last name to the firstName and lastName variables.

    Expected Output:
    The program should log a greeting message in the format "Hello, [Full Name]!" to the console.
*/

const firstName = "Ethan John";
const lastName = "Paguntalan";

console.log("Hello " + firstName + " " + lastName + "!");

// ----------------------------------------------------------------------------------------------------------
// [Challenge 4] Temperature Converter
// Convert temperatures between Celcius and Farenheit

/*
    Instructions:
    1. Variable Setup:
        Create a variable named celsius to store a temperature in Celsius. Assign a value to it, e.g., 25.0.
    2. Temperature Conversion:
        Convert the temperature from Celsius to Fahrenheit using the formula: fahrenheit = (celsius * 9/5) + 32.
        Calculate the result and store it in a variable named fahrenheit.
    3. Log Results:
        Log the original temperature in Celsius and the converted temperature in Fahrenheit to the console. Provide clear labels for each value.
    
    Test Data:
        Assign a specific temperature value to the celsius variable (e.g., 25.0).

    Expected Output:
        The program should log both the original temperature in Celsius and the converted temperature in Fahrenheit to the console.
*/

const celsius = 25;
const farenheit = (celsius * 9) / 5 + 32;
console.log(
  `The temperature in Celcius is ${celsius} degree and the converted temperature in Farenheit is ${farenheit}`
);

// -------------------------------------------------------------------------------------------------------------
// [Challenge 5] Calculate a Circle's Area and Circumference
// Calculate the area and circumference of a circle based on its radius.

/*
    Instructions:
    1. Variable Setup:
        Create a variable named radius to store the radius of a circle. Assign a specific radius value to it, e.g., 5.0.
    2. Area Calculation:
        Calculate the area of the circle using the formula: area = Math.PI * radius * radius
        Use the Math.PI constant for an accurate value of π.
    3.  Circumference Calculation:
        Calculate the circumference of the circle using the formula: circumference = 2 * Math.PI * radius
        Again, use the Math.PI constant.
    4.  Log Results:
        Log the calculated area and circumference to the console, rounding them to two decimal places using the toFixed() method.
    
    Test Data:
        Assign a specific radius value to the radius variable (e.g., 5.0).
    Expected Output:
        The program should log both the calculated area and circumference of the circle to the console, rounded to two decimal places.Ensure that the calculated values are of the number data type when logged to the console.
        
 */

const radius = 5;
const cicleArea = Math.PI * radius * radius;
const circleCircumference = 2 * Math.PI * radius;
console.log(
  parseFloat(cicleArea.toFixed(2)),
  parseFloat(circleCircumference.toFixed(2))
);
