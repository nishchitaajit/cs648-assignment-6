/**
 * Marco! Polo!
 */

for (var number = 1; number < 101; number++) {
    if (number % 3 == 0 && number % 5 == 0) window.console.log("Marco! Polo!");
    else if (number % 5 == 0) window.console.log("Polo!");
    else if (number % 3 == 0) window.console.log("Marco!");
    else console.log(number);
}
