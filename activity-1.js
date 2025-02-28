'use strict'
// Activity 1: Click Counter Challenge (15 min)
// Goal: Use event listeners, DOM manipulation, and conditionals to count button clicks.

// Instructions:
  // 1. Create a button labeled "Click Me" with an id "clickButton" in activity-1.html
  // 2. Create a paragraph with an id="counter" in activity.html
  // 3. Create a paragraph with an id="message" in activity.html
  // 4. Write a JavaScript function that:
          // - Increases the counter each time the button is clicked.
          // - Updates the displayed number.
          // - Shows a message when the count reaches 10.
  // 5. Confirm this function is added as an onclick to the button.

let count = 0;

function theCount() {
        let button = document.getElementById("clickButton");
        let counter = document.getElementById("counter");
        let message = document.getElementById("message");

        count ++;
        counter.textContent = count;
        if (count === 10) {
                message.textContent = "You clicked 10 times!";
        }

        if(count === 25){
                message.textContent = "You clicked 25 times!";
        }

}