/**
 * Countdown
 */

var userInput = window.prompt("Enter a number");
for (var number = userInput; number >= 0; number--) {
    document.write(number + "<br>");
}
