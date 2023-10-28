## 1️⃣ **PROJECT 1: Guess My Number!**

```js
"use strict";

document.querySelector(".message");
console.log(document.querySelector(".message").textContent);
```

- (.) notation for classes
- (##) for selecting ids
- .textContent to select the text.

<br>

## 2️⃣ **What's the DOM and DOM Manipulation**

**DOM** - Document Object Model: Structured Representation of Html Documents. Allows Javascript to Access Html Elements and Styles to Manipulate Them. Dom Changes text, HTML attributes, and even CSS styles.

<br>

## **The DOM Tree Structure**

![DOM Tree](image-1.png)

> NOTE: **DOM !== JS** > ![DOM is not equal to JS](image-2.png)

<br>

## 3️⃣ **Selecting and Manipulating Elements**

```js
"use strict";

// .textContent use to set the  or retrieve text content within elements such as <p> <a> <span>
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// .value used for form controls to get or set user-input values
console.log(document.querySelector(".guess").value); // " "
// set the value of forms, input, select, textarea
document.querySelector(".guess").value = 23;
```

<br>

## 4️⃣ **Handling Click Events**

- **Event Listener** - Now, an event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press,
- And if a function is just is value, then we can also pass it into another function as an argument.

```js
// This random number will restart/change everytime i load the page, if its inside, it will change everytime i click the button which does not make sense.
const number = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".btn.check").addEventListener("click", function () {
  // store the guessed number in a variable
  const guessNum = Number(document.querySelector(".guess").value);

  console.log(guessNum, typeof guessNum); // 2 'number'
  // return statement is not needed inside event listener
});
```

- whenever we get the user value it's in string format
- So we selected this button here using querySelector.
- And then we use the addEventListener method on that element to attach an event handler.
- And that event handler is this function here.

<br>

## 5️⃣ **Implementing Game Logic**

```js
const number = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".number").textContent = number;
// initialize score
let score = 20;

document.querySelector(".btn.check").addEventListener("click", function () {
  // store the guessed number in a variable
  const guessNum = Number(document.querySelector(".guess").value);

  console.log(guessNum, typeof guessNum); // 2 'number'
  // return statement is not needed inside event listener

  //  dynamic message
  if (!guessNum) {
    document.querySelector(".message").textContent = "Enter a number to guess!";
  } else if (guessNum > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Keep it lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  } else if (guessNum < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Add more";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  } else {
    document.querySelector(".message").textContent =
      "Correct!, you guessed it right!";
  }
});
```

> And so it's always good to keep a variable which actually holds the data in our code and not just rely on the DOM to hold our data. And the variable can also be called a state variable Because this score is part of the so-called application state which is basically all the data that is relevant to the application.

<br>

## 6️⃣ **Manipulating CSS Style**

```js
const number = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".number").textContent = number;
let score = 20;

document.querySelector(".btn.check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  console.log(guessNum, typeof guessNum);

  //  when player has no input
  if (!guessNum) {
    document.querySelector(".message").textContent = "Enter a number to guess!";
    // guess is high
  } else if (guessNum > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Keep it lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
    // guess is low
  } else if (guessNum < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Add more";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
    // player won
  } else {
    document.querySelector(".message").textContent =
      "Correct!, you guessed it right!";

    // (Styling the CSS)
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // document.body.firstElementChild.lastElementChild.style.width = '30rem';
  }
});
```

<br>

## 🧠 **CHALLENGE 1**

Implement a game rest functionality, so that the player can makw a new guess! Here is how:

1. Select the element with the 'again' class and attack a lick handler
2. In the handler function, restore initial values of the score and number vairbales
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

```js
let score = 20;
let number = Math.trunc(Math.random() * 10) + 1;

document.querySelector(".btn.check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  console.log(guessNum, typeof guessNum);

  //  when player has no input
  if (!guessNum) {
    document.querySelector(".message").textContent = "Enter a number to guess!";
    // guess is high
  } else if (guessNum > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Keep it lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
    // guess is low
  } else if (guessNum < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Add more";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
    // player won
  } else {
    document.querySelector(".message").textContent =
      "Correct!, you guessed it right!";
    document.querySelector(".number").textContent = number;

    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
});

// (WHEN 'Again' button is clicked!)
document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  number = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".label-score > .score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Start guessing again...";
  Number((document.querySelector(".guess").value = " "));
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
```

<br>

## 7️⃣ **Implementing HighScore**

```js
let score = 20;
let number = Math.trunc(Math.random() * 10) + 1;
// initial highscore
let highscore = 0;

document.querySelector(".btn.check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  console.log(guessNum, typeof guessNum);
  if (!guessNum) {
    document.querySelector(".message").textContent = "Enter a number to guess!";
  } else if (guessNum > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Keep it lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  } else if (guessNum < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Add more";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  } else {
    document.querySelector(".message").textContent =
      "Correct!, you guessed it right!";

    document.querySelector(".number").textContent = number;

    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // (HIGHSCORE)
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  number = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".label-score > .score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Start guessing again...";
  Number((document.querySelector(".guess").value = " "));
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
```

<br>

## 8️⃣ **Refactoring: Dry Principles**

```js
let score = 20;
let number = generateRandomNumber();
let highscore = 0;

function generateRandomNumber() {
  return Math.trunc(Math.random() * 10) + 1;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function updateScoreAndHighscore() {
  document.querySelector(".score").textContent = score;
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

function resetGame() {
  score = 20;
  number = generateRandomNumber();
  document.querySelector(".label-score > .score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing again...";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".btn.check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  if (!guessNum) {
    displayMessage("Enter a number to guess!");
  } else if (guessNum > number || guessNum < number) {
    if (score > 0) {
      displayMessage(guessNum > number ? "Keep it lower" : "Add more");
      score--;
    } else {
      displayMessage("You lost the game!");
    }
  } else {
    displayMessage("Correct!, you guessed it right!");
    document.querySelector(".number").textContent = number;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  updateScoreAndHighscore();
});

document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});
```

<br>

## 9️⃣ **Model Window**

```js
"use strict";

// mODAL wiNDOW

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-model");

console.log(btnsOpenModal);

// CAN loop over the modals

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
```

<br>

## 🔟 **Working with Classes**

```js
"use strict";

// mODAL wiNDOW

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

// loop over the modals

// -------------------------Working with Classes
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked');

//     // TO SEE THE hidden Modals when clicked
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// // Close the modal using the 'X' close button
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// // Close the modal using overlay or outside the modal
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// BETTER
// open modal with button
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

// close modal w/ button and overlay
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
```

<br>

## 1️⃣1️⃣ \*\*Handling and "Esc" Keypress Event

Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document.

```js
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Modal window</title>
  </head>
  <body>
    <button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>

    <div class="modal hidden">
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="overlay hidden"></div>

    <script src="script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #333;
  line-height: 1.5;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(to top left, #28b487, #7dd56f);
}

.show-modal {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.75rem 3.5rem;
  margin: 5rem 2rem;
  border: none;
  background-color: #fff;
  color: #444;
  border-radius: 10rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.8rem;
}

/* -------------------------- */
/* CLASSES TO MAKE MODAL WORK */
.hidden {
  display: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}
```

<br>

## 1️⃣2️⃣ **PROJECT 3: Pig Game**
