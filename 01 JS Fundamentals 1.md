# 1. JavaScript Fundamentals Part 1

---

## 0️⃣Hello World

```js
console.log("Hello World!");
```

<br>

## 1️⃣ A brief introduction to Javascript

> **JavaScript** was initially created to “make web pages alive”.

The programs in this language are called *scripts*. They can be written right in a web page’s HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

<br>

## 2️⃣ Linking a JavaScript File

#### Using internal JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Introduction</title>
    // Internal Scripting
    <script>
      let js = "amazing";
      console.log(40 + 8 + 23 - 10);
    </script>
  </head>
  <body></body>
</html>
```

#### Using External Scripting

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Introduction</title>
  </head>
  <body>
    //External scripting
    <script src="script.js"></script>
  </body>
</html>
```

```js
// External JavaScript
let js = "amazing";
console.log(40 + 8 + 23 - 10); // 61
```

<br>

## 3️⃣ Values and Variables

```js
console.log("John"); // John
console.log(23); // 23

let firstName = "Ethan";

console.log(firstName); // Ethan
```

<br>

## 4️⃣ Variable name conventions

```js
let john_matilda = "JM";
let $function = 27;

let person = "Ethan";
const PI = 3.1415;

// camelCasing
let myFirstJob = "Coder";
let myCurrentJob = "Student";

// this is not descriptive
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob); // Coder
```

<br>

## 5️⃣ 7 Primitive Data Types

#### 1) **Number** - floating point numbers 👉 Used for decimals and integers

```js
let age = 23;
```

#### 2) **String** - text values ​​👉 used to represent characters, words or sentences in a program

```js
let firstName = "Ethan";
```

> #### Note: Strings can be enclosed by single quotes (') or double quotes ("").

#### 3) **Boolean** - true/false value 👉 represents truthy / falsy values, or used for taking decisions

```js
let fullAge = true;
```

#### 4) **Undefined** - Value taken by a variable that is not yet defined ('empty value').

```js
let children;
```

#### 5) **Null** - Also means 'empty value'

#### 6) **Symbol** (ES2015) - Value that is unique and cannot be used [Not useful for now]

#### 7) **BigInt** (ES2020) - Larger integers than the Number type can hold.

### 👆 JavaScript has dynamic typing:

> We do **_not_** have to mannually define the data type of the value stored in a variable.

> Variables are created when you assign something to it.

> Data types are determined **automatically**

```js
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true); // boolean

let age = 23;
console.log(typeof age); // number
console.log(typeof javascriptIsFun); // boolean
console.log(typeof ""); // string

// reassignment
javascriptIsFun = "YES!";
console.log(javascriptIsFun); // YES!
console.log(typeof javascriptIsFun); // String (now a string! after reassignment)

// Undefined var
let year;
console.log(year); // undefined
console.log(typeof year); // undefined (data type)

year = 2023;
console.log(typeof year); // number (2023 is a number)

console.log(typeof null); // object (kind a bug in JS)
```

<br>

## 6️⃣ **let | const | var**

> The three keywords `var`, `const` & `let`. They all declare variables, but they behave differently under different circumstances.

1. `var` - Old way, but still works fine. (NOT RECOMMENDED)
2. `const`, `let`: New ways to declare variables.

- `const` - Cannot change its value once assigned
- `let`- Can change its value later on

```js
let age = 30;
age = 31; // (mutate the variable, simply say: we reassign age from 30 to 31)

const birthYear = 1991;
// birthYear = 1990;                        // (value cannot be changed| immutable or reassignment)
// const job;                               // (cannot accept undefined variable)

//var is the old way prior to ES6
var job = "programmer"; // (function scope)
job = "teacher"; // (is a block scope)
```

> **NOTE:** Declaring variables is not mandatory in JS, not it is not a good practice as it will may confuse with scoping.

<br>

## 7️⃣ **Basic Operator**

```js
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// We can log multiple output in 1 line (,) to separate
console.log(ageJonas, ageSarah); // 46 19 (minus operator)

// 2 ** 3 = 2 x 2 x 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 92 4.6 8

// Concatenation
const firstName = "Ethan";
const lastName = "Paguntalan";
console.log(firstName + " " + lastName); // Ethan Paguntalan
```

**JavaScript runs the code from TOP to BOTTOM; LEFT to RIGHT**

```js
// Assignment Operators
let x = 10 + 5; // 15 ('='assignment operator and '+' plus operator)
x += 10; // 25 (x = 15 + 10 or 25)
x *= 4; // 100 (x = 25 * 4 or 100)
x /= 2; // 50
x++; // 51
x--; // 50
x--; // 49
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // true ( 46 > 19)
const legalAge = 18;
console.log(ageSarah >= legalAge); // true

const isFullAge = ageSarah >= 18;
console.log(isFullAge); // true (you can reuse this value over and over again in your code to which is can be applied)

console.log(now - 1991 > now - 2018); // true (2037-1991 (46) > 2037-2018 (19))
```

<br>

## 8️⃣ **Operator Precendence**

[**MDN Operator Precedence**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
. Check this website for guide

```js
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // true

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //(x = y = 10; y = 10; x = y)
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, age); // 32.5
console.log(ageJonas, ageSarah, averageAge); // 46 19 32.5
```

### 🧠 💪 **Challenge #1**

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height \* height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

```js
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
```

2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

```js
let BMIMark = 78 / (1.69 * 1.69);
let BMIJohn = 92 / (1.95 * 1.95);
```

3. Log the value of BMIMark and BMIJohn to the console.

```js
console.log(BMIJohn); // 24.194608809993426
console.log(BMIMark); // 27.309968138370508
```

- **BONUS:** Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

```js
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI); // true
```

> TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

<br>

## 9️⃣ **Strings and Template Literals**

> In General: It is better to use **Template literal** with backticks **``**.

```js
const firstName = "Ethan";
const job = "trainee";
const birthYearE = 2000;
const year = 2037;
```

```js
// String literal
const ethan =
  "I'm " + firstName + ", a " + (year - birthYearE) + " year old " + job + "!";
console.log(ethan);
```

```js
// Template literal
const ethanNew = `I'm ${firstName}, a ${year - birthYearE} year old ${job}!`;
console.log(ethanNew);
```

Multilines (String vs Template literal)

```js
console.log(`Just a regulat string....`);

// Multiline String literal
console.log(
  "String with \n\
multiple \n\
lines"
);

// This is cleaner and easier (Multiline Template literal)
console.log(`String              
multiple
lines`);
```

<br>

## 🔟 **Taking Decisions: if/ else Statements**

```js
// Control Structure
//(0)
const age = 15;
const isOldAge = age >= 18;

if (isOldAge) {
  console.log("Ethan can start driving license 🚗"); // (false, therefore proceed to else statement)
} else {
  const yearsLeft = 18 - age;
  console.log(`Ethan is too young. Wait another ${yearsLeft} years :)`); // Ethan is too young. Wait another 3 years :)
}
```

```js
//(1)
const birthYear = 2000;
// declare the variable outside of the block to make the variable inside the block accessible

let century;
if (birthYear <= 2000) {
  // do not redeclare the variable
  century = 20;
} else {
  century = 21;
}

console.log(century); // 20
```

### 🧠 💪 **Challenge #2**

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

> Note: Don't round the BMI values. Leave them as they are.

```js
/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); */

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`); // Mark's BMI 27.309968138370508 is higher than John's 24.194608809993426
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`); // (won't run)
}
```

<br>

## 1️⃣1️⃣ **Type Conversion and Coercion**

#### **Type Conversion** - when manunually convert from 1 type to another

```js
const inputYear = "2000";
console.log(inputYear + 18); // 200018   (String + number = concatenated string; only applicable for addition operation)

console.log(Number(inputYear)); // 2000 (number)
console.log(Number(inputYear), 18); // 2000 18 (number)
console.log(Number(inputYear) + 18); // 2018 (number)

console.log(Number("Ethan")); // NaN (Not a Number)
console.log(typeof NaN); // number (invalid number)

console.log(String(23), 23); // '23' 23
```

#### **Type Coercion** - when JS automatically converts data type behind the scenes for us.

```js
console.log("I am " + 23 + " years old"); // I am 23 years old (string)
console.log("23" - "10" + 3); // 16 (no coersion because the 1st operation used is minus)
console.log("23" + "10" - 3 - 3); // 2304 (there is coercion because the 1st operation is plus);
console.log("23" + "23" - (10 / 4) * 8); // 2303 ( PEMDAS,  [2323 - ((10/4) * 8)] )
console.log(2 + 2 + 2 + "0"); // 60
console.log("10" - "4" - "3" - "2" + "5"); // 25 [( 10 -4 -3 -2) + 5]

let n = "1" + "1";
n = n - 1;
console.log(n); // 10
```

<br>

## 1️⃣2️⃣ \*\*Truthy and Falsy Values

> ### 5 falsy values: 0, "", undefined, null, NaN,

```js
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Ethan")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
```

```js
const money = 0; // falsy
if (money) {
  console.log(`Don't spend at all!`);
} else {
  console.log("You need to save that up!"); // (this will run, since assigned 0 is falsy (no comparison))
}
```

```js
let bucks = 0;
if (bucks === 0) {
  console.log("Don't spend at all!"); // (This will run, since the comparison is truthy 0 === 0)
} else {
  console.log("You need to save up!");
}
```

```js
bucks = 100;
if (bucks) {
  console.log("You got 100 bucks!"); // (This will run, since the assigned 100 is truthy)
} else {
  console.log("Poor you");
}
```

```js
let height;
if (height) {
  console.log(`YAY! height is defined`);
} else {
  console.log("height is undefined!"); // this will run (height is not defined when declared)
}
```

So in practice, the conversion to boolean is always implicit, not explicit, or in other words is always typed coercion that JavaScript does automatically behind the scenes.

But when exactly does JavaScript do type coercion to booleans? Well, it happens in two scenarios. First, when using logical operators, and Second in logical context, like for example, in the condition of an if else statement.

<br>

## 1️⃣3️⃣ \*\*Equality Operators: == vs. ===

```js
const age = "18";
if (age == 18) console.log("You just became an adult (loose)"); // You just became an adult

if (age === 18) console.log("You just became an adult (strict)"); // (not run: '18' !== 18)

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite); // (whatever number the user submit)
console.log(typeof favorite); // number

if (favorite === 23) {
  // ('23' == 23 -> true; 23 === 23 -> true; '23' === 23 -> false)
  console.log("Cool! 23 is an amazing number (loose)");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23?");
}
```

> **NOTE:** It is good practice to use strict equality or inequality operator when comparing values, unless other specific logical requirements are needed.

<br>

## 1️⃣4️⃣ **Boolean Logic**

![Boolean Logic](./images/Boolean%20Logic.png)

<br>

## 1️⃣5️⃣ **Logical Operators**

```js
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

const shouldDrive = hasDriverLicense ** hasGoodVision;

// More complication
const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired); // false

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Ethan is safe for driving"); // (will run)
} else {
  console.log("Someone else has to drive...");
}
```

### 🧠 💪 **Challenge #3**

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

```js
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(parseFloat(scoreDolphins.toFixed(2))); // 97.67
console.log(parseFloat(scoreKoalas.toFixed(2))); // 96.33
```

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

```js
if (scoreDolphins > scoreKoalas){
   console.log(`Dolphins win the trophy`);      // (will run: 97.67 > 96.33)
} else if (scoreDolphins < scoreKoalas){
   console.log(`Koalas win the trophy`);
} else {
   console.log(`Both win the trophy`);
```

<br>

> **BONUS 1:** Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points.

_TEST DATA BONUS1: Dolphins score 97, 112, and 101. Koalas score 109, 95, 123._

```js
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

console.log(
  parseFloat(scoreDolphins.toFixed(2)),
  parseFloat(scoreKoalas.toFixed(2))
); // 103.33 109

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy"); // (will run: 103.33 < 109)
} else {
  console.log(`Both lose`);
}
```

<br>

> // **BONUS 2:** minimum score also applies to a draw! So a draw only happens when both teams have the same score and both hav e a score greater than or equal 100 points. Otherwise, no team wins the trophy.

_TEST DATA BONUS2: Dolphins score 97, 112, 101. Koalas score 109, 95, 106_

```js
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

console.log(
  parseFloat(scoreDolphins.toFixed(2)),
  parseFloat(scoreKoalas.toFixed(2))
); // 103.33 103.33
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`A draw!`); // (will run: 103.33 ===  103.33 && both >= 100)
} else {
  console.log("Both lose");
}
```

<br>

## 1️⃣6️⃣ **Switch Statement**

> Using Switch Statement

Useful if you have single variable to compare against multiple possible values, also if you want to be more concise and readable.

```js
const day = "mOnday";
switch (
  day.toLowerCase() // (.toLowerCase() converts input string to all lower case - to match the cases)
) {
  case "monday": // (day === 'monday')
    console.log("Plan course structure"); // (will run)
    console.log("Go to coding meetup"); // (will run)
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
```

> Using if / else if / else statement.

Useful if you prefer flexibiliity and verbosity

```js
const day1 = "SATURDAY".toLowerCase();
if (day1 === "monday") {
  console.log("Plan course structure");
} else if (day1 === "tuesday") {
  console.log(`Prepare theory videos`);
} else if (day1 === "wednesday" || day1 === "thursday") {
  console.log(`Write code examples`);
} else if (day1 === "friday") {
  console.log(`Record videos`);
} else if (day1 === "saturday" || day1 === "sunday") {
  console.log(`Enjoy the weekend :D`); // (will run)
} else {
  console.log(`Not a valid day!`);
}
```

<br>

## 1️⃣7️⃣ **Statements and Expressions**

```js
3 + 4; // output: 7 - an expression
1991;
true && false && !false;

// Following is a Statement
if (50 > 10) {
  const str = "50 is bigger";
}

const me = "Xoraus";
console.log(`I'm ${2050 - 1997} years old ${me}`); // In javascript literals we can use expressions but not statements.
```

> **an Expression is a piece of code that produces a value.**

> **Statements are like full sentences that translate our actions.**

<br>

## 1️⃣8️⃣ **Conditional (Ternary) Operator**

```js
const age = 23;

// age >= 18 👉 condition; ? 👉 expressionIfTrue : 👉  expressionifFalse
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water 💧`); // I like to drink wine 🍷
```

<br>

> Using ternary Operator

```js
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink); // wine 🍷
```

<br>

> Using if/else statement

```js
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
```

```js
// (expression)
console.log(`I like to drink ${drink2}`); // I like to drink wine 🍷
// (expression)
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); // I like to drink wine 🍷
// NOTE: We still need to use if else statement if the code requires complex conditions. However, we can use ternary operator to make our code more simpler and readable if it only requires us to take a decision between two options, either true or false
```

<br>

### 🧠 💪 **Challenge #4**

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

```js
let bill = 275;

let tip;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
```

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

```js
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
```

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

> **Note:** Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

> **TEST DATA:** Test with different bill values: 275, 40, and 430

```js
bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
```
