let rand = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess the number 1-10:");
if (rand === Number(guess)) {
    alert("Good guess. The number is " + rand + ".");
} else {
    alert("Sorry, not this time. The number is " + rand + ".");
}