var number1 = +prompt("Enter the first number:").trim();
var operator = prompt("Choose an action (+, -, *, /").trim();
var number2 = +prompt("Enter the second number:").trim();

var result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  if (number2 === 0) {
    console.log("It is not possible to divide by 0!");
  } else {
    result = number1 / number2;
  }
} else {
  console.log("Incorrect action was taken!");
}

if (result !== undefined) {
  console.log("Result: " + result);
}
