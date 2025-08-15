let rand = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess the number 1-10:");
while (true) {
    if (rand === Number(guess)) {
        alert("Good guess. The number is " + rand + ".");
        break;
    } else {
        alert("Sorry, try again.");
    }
    guess = prompt("Guess the number 1-10:");
}
