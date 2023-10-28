# 1. JavaScript Fundamentals Part 2

---

## 0️⃣ **Hello World**

```js
"use strict"; // to activate strict mode to
```

- Always put strict mode in the beginning of the file
- It makes it easier for developer to avoid accidental errors.

First, strict mode forbids us to do certain things and second, it will actually create visible errors for us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.

```js
"use strict"; // good for debugging

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // (if in  hasDriver(s)License s is missing the code will behave  unexpectedly)
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio'; // (Uncaught SyntaxError: Missing initializer in const declaration)
// const private = 534; // (Uncaught SyntaxError: Missing initializer in const declaration)
```

<br>

## 1️⃣ **Functions**

- A piece of code that we can reuse over and over again.
- A function can hold one or more complete lines of code, whereas a variable can only hold values;

```js
function logger() {
  // within this curly braces is called a statement or function block. Here we execute the code.
  console.log(`My name is Ethan`);
}

// calling/running/invoking a function
logger(); // My name is Ethan
logger(); // My name is Ethan
logger(); // My name is Ethan

// parameters - alike variables but specific only to this function; they will get defined once called/invoked
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // (the value inside the juice can be reuse later)
}

// if we want the value that was returned; say in our case here the value of 'juice' in our fruitProcessor function, we need to store it in a variable
// call the function (with the arguments)
// the result of calling this function was the value of 'juice' variable that was returned. Then save it to a new variable, here 'appleJuice'
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges.
// console.log(fruitProcessor(5, 0));                  // Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Juice with 2 apples and 4 oranges.
```

<br>

## 2️⃣ **Function Declaration vs Expression**

Difference:
You can call/invoke the function even before it is declared/initialized.Whereas for function expression, you cant.

The parameter is a kind of placeholder in the function and the argument is then the actual value that we use to fill in that placeholder that is the parameter.

In Javascript functions are just values.

```js
//FUNCTION DECLARATION
// A parameter is like a local variable that is only avaiable to a function it was attached to
const currentYear = 2037;
function calcAge1(birthYear) {
  const age = currentYear - birthYear;
  // return if u want to access the value of "age" outside the function scope.
  return age;
}

console.log(calcAge1(1991)); // 46
// BETTER USE this (capture or save into a variable)
const age1 = calcAge1(1991);
console.log(age1); // 46
```

```js
// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  // this is an expression
  // more concise, we only need to calculate the age, no need to create a separate variable to reference that. Unless, you would want to perform additional operations on that variable BEFORE returning it.
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2); // 46 46
```

<br>

## 3️⃣ **Arrow Functions**

#### Normal Function (Function Expression)

```js
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); // 46
```

#### Arrow Function (much shorter, 1 line)

```js
//(0)
// values we want to return
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46
```

```js
//(1)
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // need to explicitly include the return statement (if non one-liner code)
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas")); // Jonas retires in 19 years
console.log(yearsUntilRetirement(2000, "Ethan")); // Ethan retires in 28 years
```

<br>

## 4️⃣ **Calling Other Functions**

Arrow functions do not get the this Keyword

```js
function cutFruitPieces(fruit) {
  // return
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // call outer function cutFruitPieces
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice; // (the value inside the juice can be reuse later)
}
console.log(fruitProcessor(2, 3)); // Juice with 8 apples and 12 oranges

const fruitTwo = fruitProcessor(1, 3);
console.log(fruitTwo); // Juice with 4 apples and 12 oranges
```

## 5️⃣ **Function Review**

### Arrow Function

```js
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

const johnsRetirementProfile = yearsUntilRetirement(1991, "John");
console.log(johnsRetirementProfile); // John retires in 19 years
```

#### Calculating Retirement for John

```js
const calcAge = function (birthYear) {
  // 46 (2037 - 1991) representing age
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (age, firstName) {
  const yearsBeforeRetirement = 65 - age;
  return `${firstName} retires in ${yearsBeforeRetirement} years`;
};

// Calculate John's age
const johnsAge = calcAge(1991);

// Calculate and display John's retirement profile
let johnRetirementProfile = yearsUntilRetirement(johnsAge, "John");
console.log(johnRetirementProfile);
```

#### Calculating Retirement for Jonas

```js
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

// Calculate and display Jonas's retirement profile
const jonasRetirementProfile = yearsUntilRetirement(1991, "Jonas");
console.log(jonasRetirementProfile);
```

Difference: Both sections achieve the same result of calculating and displaying retirement profiles for individuals. The main difference lies in the function naming and structure:

- In the first section, functions are named calcAge and yearsUntilRetirement, and we calculate John's age first and then use it in the retirement calculation.

- In the second section, functions are named calAge and yearsUntilRetirement, and we directly calculate Jonas's age within the yearsUntilRetirement function.

While the outcome is the same, the second section encapsulates the entire retirement calculation within the yearsUntilRetirement function, whereas the first section separates age calculation (calcAge) from retirement calculation (yearsUntilRetirement) with separate function calls. Both approaches are valid, and the choice may depend on code organization and readability preferences.

![Three types of functions](./images/3%20types%20of%20functions.PNG)

![Anatomy of a Function](./images/Anatomy%20of%20a%20function.PNG)

### 🧠 💪 **Challenge #1**

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

**Your tasks:**

1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

```js
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
```

2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

```js
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
```

3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

<br>

> **TEST DATA 1:** Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

```js
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else console.log("No team wins..."); // no team wins...
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);
```

<br>

> **TEST DATA 2:** Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

```js
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`); // Dolphins win (60 vs 28)
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else console.log("No team wins...");
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
```

<br>

## 6️⃣ **Introduction to Arrays**

1st data structure, object = 2nd data structure

> Array is like a big container where we can throw variables and later reference them.

```js
const friends = ["Sarah", "Breynard", "Ethan"];
console.log(friends); // (3) ['Sarah', 'Breynard', 'Ethan']

// other syntax
const years = new Array(1991, 1984, 2008, 2020);
console.log(years[0]); // 1991
console.log(friends[2]); // Ethan

console.log(friends.length); // 3
console.log(friends[friends.length - 2]); // Breynard
console.log(friends[friends.length - 1]); // Ethan

// reassign a new value
//  only primitive values are immutable, and Array isnt a primitive value. Thus, we can change it so we can mutate it.
// However, we can't raplace the entire array value without accessing only specific values inside the array.
// friends = 2;    // (Uncaught TypeError: Assignment to constant variable.)
friends[2] = "Ethan John";
console.log(friends); // (3) ['Sarah', 'Breynard', 'Ethan John']
```

#### Using multiple data types in an Array (not RECOMMENDED; use objects for this)

```js
const firstName = "Ethan";
const jonas = [firstName, 2091, "teacher"];
console.log(jonas); // (3) ['Ethan', 2091, 'teacher']

// using objects to better represent data
const person = {
  name: "John",
  age: 30,
  occupation: "teacher",
};
console.log(person); // {name: 'John', age: 30, occupation: 'teacher'}
```

#### Little Exercise

```js
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1967, 2002, 2010, 2018];
// access 1990 to pass to the calcAge function
console.log(calcAge(year[0])); // 47 (1990 - 2037)
console.log(calcAge(year[year.length - 1])); // 19 (2037-2018)

// You can do this
const age1 = calcAge(year[0]);
const ageLast = calcAge(year[year.length - 1]);
console.log(age1, ageLast); // 47 19

const ages = [age1, ageLast];
console.log(ages); // (2) [47, 19]
```

<br>

## 7️⃣ **Basic Array Operations**

```js
const friends = ["Breynard", "Ethan", "Sarah"];
// add element to the end of the Array
friends.push("Ethan John");
const newLength = friends.push("John");

console.log(friends); // (5) ['Breynard', 'Ethan', 'Sarah', 'Ethan John', 'John']
console.log(newLength); // 5
```

#### Add element to the beginning of the Array

```js
friends.unshift("Alexa");
console.log(friends); // (6) ['Alexa', 'Breynard', 'Ethan', 'Sarah', 'Ethan John', 'John']
```

#### Remove last element of the Array

```js
friends.pop(); // (removed 'John')
const popped = friends.pop(); // (removed 'Ethan John' and returned it)
console.log(popped); // Ethan John (returned)
console.log(friends); // (4) ['Alexa', 'Breynard', 'Ethan', 'Sarah']
```

#### Remove first element of the Array

```js
friends.shift();
console.log(friends); // (3) ['Breynard', 'Ethan', 'Sarah']
```

#### Tell which position an element in the Array

```js
console.log(friends.indexOf("Ethan")); // 1
console.log(friends.indexOf("Bob")); // -1 (element not in an Array)
```

#### ES6 method (NEW method)

check if the element is in the array (TRUE or FALSE)

```js
friends.push(23);
// This is useful when we do conditionals
console.log(friends.includes("Ethan")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false (strict equality ===)

if (friends.includes("Bob")) {
  console.log("You have a friend Ethan");
} else {
  console.log("Bob is not your friend"); // Bob is not your friend
}
```

### 🧠 💪 **Challenge #2**

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

```js
let tip;
// function calcTip(bill) {
//   if (bill > 50 && bill < 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// }

//Using ternary instead of if else
const calcTip = (bill) =>
  bill > 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

// TEST
const tipReceived = calcTip(100);
console.log(tipReceived); // 15
```

2. And now let's use arrays! So, create an array called bills containing the test data below.

```js
const bills = [125, 555, 44];
```

3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

```js
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); // (3) [18.75, 111, 8.8]
```

4. BONUS: Create an array totals containing the total values, so the bill + tip.

```js
const totalSpentOne = calcTip(bills[0]) + bills[0];
const totalSpentTwo = calcTip(bills[1]) + bills[1];
const totalSpentThree = calcTip(bills[2]) + bills[2];

const totals = [totalSpentOne, totalSpentTwo, totalSpentThree];
console.log(totals); // (3) [143.75, 666, 52.8]
```

> TEST DATA: 125, 555, and 44.

<br>

## 8️⃣ **Objects**

```js
// used for unstructured data
const ethanProfile = {
  // the order do not matter; unlike arrays
  firstName: "Ethan",
  lastName: "Paguntalan",
  age: 2023 - 2000,
  friends: ["Breynard", "Sarah", "John"],
};
```

<br>

## 9️⃣ **Dot vs. Bracket**

```js
const ethanProfile = {
  firstName: "Ethan",
  lastName: "Paguntalan",
  age: 2023 - 2000,
  friends: ["Breynard", "Sarah", "John"],
};

// Dot
console.log(ethanProfile.lastName); // Paguntalan

// Bracket
console.log(ethanProfile["age"]); // 23
// in bracket, you can put expressions inside
const nameKey = "Name";
console.log(ethanProfile["first" + nameKey]); // Ethan )

// const interestedIn = prompt(
//   "What do you want to know about EThan? Choose between firstName, lastName, age, and friends"
// );
// // you cant do Dot notation, it will be Undefined
// console.log(ethanProfile[interestedISWn]); // Paguntalan

// if (ethanProfile[interestedIn]) {
//   console.log(Okay);
// } else {
//   console.log("Wrong request!");
// }

// ADDING element w/ DOT notation
ethanProfile.location = "Philippines";
console.log(ethanProfile); // {firstName: 'Ethan', lastName: 'Paguntalan', age: 23, friends: Array(3), location: 'Philippines'}
// Access the element in the object
console.log(ethanProfile["location"]); // Philippines

// ADDING element w/ BRACKET
ethanProfile["email"] = "dev-paguntalan@gmail.com";
console.log(ethanProfile.email);

// MINI-CHALLENGE
// "Ethan has 3 friends, and his best friend is named Breynard"
console.log(
  `${ethanProfile["firstName"]} has ${ethanProfile["friends"].length} friends, and his best friend is ${ethanProfile["friends"][1]}` // Ethan has 3 friends, can his best friend is Sarah
);
```

<br>

## 🔟 **Object Methods**

```js
const ethanProfile = {
  firstName: "Ethan",
  lastName: "Paguntalan",
  birthYear: 1991,
  friends: ["Breynard", "Sarah", "John"],
  hasDiversLicense: false,
  occupation: "student",

  // any function attach to an object is called a METHOD
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  // this. keyword is the object calling the method, here it is "ethanProfile"
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // MINI CHALLENGE
  // Write a method called "getSummary"; this method should return a string that summarizes the profile of a person.
  // "Ethan is a 23-year old student, and has no driver's license"

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.occupation
    }, and ${
      this.hasDiversLicense ? "has driver's license" : "has no driver's license"
    }`;
  },
};

// console.log(ethanProfile["calcAge"]()); // 46
ethanProfile.calcAge();

console.log(ethanProfile.age); // 46
console.log(ethanProfile.getSummary()); // Ethan is a 46-year old student, and has no driver's license
```

<br>

## 🧠💪 **Challenge #3**

Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height \* height) (mass in kg and height in meters).

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

```js
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(john.calcBMI()); //24.194608809993426
console.log(mark.calcBMI()); // 27.309968138370508
```

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

```js
mark.bmi > john.bmi
  ? console.log(
      `${mark.fullName}'s BMI (${parseFloat(mark.bmi).toFixed(
        2
      )}) is higher than ${john.fullName}'s (${parseFloat(john.bmi).toFixed(
        2
      )})`
    )
  : console.log(
      `${john.fullName}'s BMI (${parseFloat(john.bmi).toFixed(
        2
      )}) is higher than ${mark.fullName}'s (${parseFloat(mark.bmi).toFixed(
        2
      )})`
    );

// OUTPUT: Mark's BMI (27.31) is higher than John Smith's (24.19)
```

<br>

## 1️⃣1️⃣ **Iterations: The For Loop**

```js
for (let i = 1; i <= 3; i++) {
  console.log(`repetition ${i}`);
}
/*
repetition 1
repetition 2
repetition 3
*/
```

<br>

## 1️⃣2️⃣ **Looping Arrays, Breaking and Continuing**

```js
const ethanProfile = [
  "Ethan",
  "Paguntalan",
  2037 - 1991,
  "student",
  ["Breynard", "John", "Sarah"],
  true,
];
const typesOfArray = [];
for (let i = 0; i < ethanProfile.length; i++) {
  const newArray = typesOfArray.push(typeof ethanProfile[i]);
}
/*
Ethan
Paguntalan
46
student
[ 'Breynard', 'John', 'Sarah' ]
*/

console.log(typesOfArray);
```

```js
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages); // [ 46, 30, 68, 17 ]
```

### CONTINUE

```js
const ethanProfile = [
  "Ethan",
  "Paguntalan",
  2037 - 1991,
  "student",
  ["Breynard", "John", "Sarah"],
  true,
];

const stringOnly = [];

for (let i = 0; i < ethanProfile.length; i++) {
  if (typeof ethanProfile[i] !== "string") {
    continue;
  } else {
    stringOnly.push(ethanProfile[i]);
  }
}

console.log(stringOnly); // [ 'Ethan', 'Paguntalan', 'student' ]
```

### BREAK

```js
for (let i = 0; i < ethanProfile.length; i++) {
  if (typeof ethanProfile[i] === "number") {
    break;
  }
  console.log(ethanProfile[i]);
}

/*
Ethan
Paguntalan
*/
```

<br>

## 1️⃣3️⃣ **Looping Backwards and Loops in Loops**

```js
const ethanProfile = [
  "Ethan",
  "Paguntalan",
  2037 - 1991,
  "student",
  ["Breynard", "John", "Sarah"],
  true,
];

const backwardsArray = [];
for (let i = ethanProfile.length - 1; i >= 0; i--) {
  backwardsArray.push(ethanProfile[i]);
}

console.log(backwardsArray);
/*
[
  true,
  [ 'Breynard', 'John', 'Sarah' ],
  'student',
  46,
  'Paguntalan',
  'Ethan'
]
*/
```

### Loop inside Loop

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
  for (let one = 1; one <= 2; one++) {
    console.log(`repetition${[one]}`);
  }
}
/*
1
repetition1
repetition2
2
repetition1
repetition2
3
repetition1
repetition2
*/
```

<br>

## 1️⃣4️⃣ **While Loop**

```js
let i = 1;
while (i < 4) {
  console.log(i);
  i++;
}
/*
1
2
3
*/
```

```js
let dice = "";
while (dice !== 5) {
  console.log((dice = Math.trunc(Math.random() * 5) + 1));

  if (dice === 5) {
    console.log("Got ya 5!");
  }
}

/*
2
2
4
Got ya 5!
*/
```

<br>

## 🧠💪 **Challenge #4**

Let's improve Steven's tip calculator even more, this time using loops!

> TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

```js
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];
```

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

```js
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals);
```

### BONUS

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

```js
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(tips)); // 42.89
console.log(calcAverage(totals)); // 275.19
```
