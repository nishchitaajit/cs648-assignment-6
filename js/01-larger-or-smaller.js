/**
 * Application that displays the larger of 2 numbers entered by the user
 */


var firstNumber = parseInt(window.prompt("Enter first number"));
var secondNumber = parseInt(window.prompt("Enter second number"));

document.write("you entered <br>");
document.write("Fist Number : " + firstNumber + "<br>");
document.write("Second Number : " + secondNumber + "<br>");

if (firstNumber == secondNumber) {
    document.write("Both numbers are " + firstNumber + ". Thus, both numbers are equal");
} else {
    var larger = (firstNumber > secondNumber) ? firstNumber : secondNumber;
    document.write("Larger Number " + larger);
}
