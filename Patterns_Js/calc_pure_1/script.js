"use strict";

/* Operation logic:
We take two numbers.
We look at the value in the variable for the selected action.
Depending on this, we calculate the result. */

alert('Hello, World! Welcom to Calculator!'); // We write greetings!

// Variable that stores the selected mathematical action.
var op;

// Function that will highlight the selected math action.
function sel_light(sel_id) {

  // Remove the highlight class from all buttons.
  document.getElementById("plus").classList.remove("light");
  document.getElementById("minus").classList.remove("light");
  document.getElementById("multiplication").classList.remove("light");
  document.getElementById("divide").classList.remove("light");

  // And add it only to the pressed.
  document.getElementById(sel_id).classList.add("light");

  // Depending on the key pressed, change the value of the variable "op".
  switch (sel_id) {
    case "plus":
      op = "+"
      break;
    case "minus":
      op = "-"
      break;
    case "multiplication":
      op = "*"
      break;
    case "divide":
      op = "/"
      break;
  }
}

// Add a keypress handler to the second input field.
document.getElementById("num2").addEventListener("keydown", function (e) {
  if (e.keycode === 13) {
    func();
  }
});

// Calculation function.
function func() {

  // Variable for the result.
  var result;

  // Get first and second number.
  var num1_str = String(document.getElementById("num1").value);
  var num2_str = String(document.getElementById("num2").value);

  // Check if the first line is not empty.
  if ((num1_str.length == 0) || (num1_str.indexOf(" ") != -1)) {

    // If it is empty - write a message.
    document.getElementById("result").innerHTML = "You didn\'t enter the first number or you added a space in the input field";

    // And exit the function.
    return;
  }

  // Check if the second string is empty.
  if ((num2_str.length == 0) || (num2_str.indexOf(" ") != -1)) {

    // If it is empty - write a message.
    document.getElementById("result").innerHTML = "You didn\'t enter the second number or you added a space in the input field";

    // And exit the function.
    return;
  }

  // Convert strings to numbers.
  let num1 = Number(num1_str);
  let num2 = Number(num2_str);


  // Check if the number from the first line is obtained or not.
  if (isNaN(num1)) {

    // If it didn't work, write a message.
    document.getElementById("result").innerHTML = "The calculator cannot recognize the first number. Check it out please";

    // And exit the function.
    return;
  }

  // Check if the number from the second line is obtained or not.
  if (isNaN(num2)) {

    // If it didn't work, write a message.
    document.getElementById("result").innerHTML = "The calculator cannot recognize the second number. Check it out please";

    // And exit the function.
    return;
  }

  // Check the size of the numbers.
  if ((num1 > 99999999) || (num2 > 99999999)) {

    // If one of them does not fit in the range, write a message.
    document.getElementById("result").innerHTML = "The calculator can work with numbers no more than 99 999 999";

    // And exit the function.
    return;
  }

  // Check the second number when dividing.
  if ((num2 == 0) && (op == '/')) {

    // If it didn't work, write a message.
    document.getElementById("result").innerHTML = "Can\'t divide by zero";

    // And exit the function.
    return;
  }

  // Look at what was in the variable with the action, and act based on this.
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = "Select an action";
  }

  // Send the result to the page.
  document.getElementById("result").innerHTML = result;
}
