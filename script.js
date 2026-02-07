var number1 = +prompt("Enter the first number:");
var numerator = prompt("Choose an action (+, -, *, /):");
var number2 = +prompt("Enter the second number:");

number1 = +(number1);
number2 = +(number2);

var result;

if (numerator === "+") {
  result = number1 + number2;
} else if (numerator === "-") {
  result = number1 - number2;
} else if (numerator === "*") {
  result = number1 * number2;
} else if (numerator === "/") {
  if (number2 === 0) {
    console.log("It is not possible to divide by 0!");
  } else {
    result = number1 / number2;
  }
} else {
  console.log("Incorrect action was taken!");
}
