/**
 * Coin flip game
 */

var coinFlip = Math.round(Math.random());
var choice = window.prompt(" Choose Heads or Tails. For Heads enter 'H'. For Tails enter 'T'");
choice = choice.toUpperCase();

var result;

if (!coinFlip) {
    result = "H";

    if (choice == "H") {
        window.alert("The flip was heads and you chose heads...you win!")
    }
    if (choice == "T") {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
}

if (coinFlip) {
    result = "T";

    if (choice == "H") {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
    if (choice == "T") {
        window.alert("The flip was tails and you chose tails...you win!");
    }
}
