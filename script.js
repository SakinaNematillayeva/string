var number1 = +prompt("Enter the first number:").trim();
var operator = prompt("Choose an action (+, -, *, /)").trim();
var number2 = +prompt("Enter the second number:").trim();

var result;
switch (operator) {
  case "+":
    result = number1 + number2;
    alert(result);
    break;
  case "-":
    result = number1 - number2;
    alert(result);
    break;
    case "*":
    result = number1 * number2;
    alert(result);
    break;
    case "/":
  if (number2 === 0) {
    alert("It is not possible to divide by 0!");
  } else {
    result = number1 / number2;
    alert(result);
  }
  break;
  default: 
  alert("This is not true!")
}

