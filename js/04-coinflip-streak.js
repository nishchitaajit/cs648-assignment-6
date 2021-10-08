/**
 * The “Coin Flip Streak” Game
 */

var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.console.log("Tails")
    } else {
        window.console.log("Heads");
    }
} while (coinFlip != 1)
