/**
 * The “Coin Flip” Game Redux
 */
var coinFlip;

for (var number = 0; number < 10; number++) {
    coinFlip = Math.round(Math.random());
    window.console.log("Random number " + coinFlip);

    if (coinFlip) {
        window.console.log("Tails")
    } else {
        window.console.log("Heads");
    }
}
