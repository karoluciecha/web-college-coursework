let rand = Math.floor(Math.random() * 100) + 1;
for (let i = 6; i > 0; i--) {
    let guess = prompt("Remaining lives: " + i + ". Guess the number 1 - 100:");
    if (rand === Number(guess)) {
        alert("Good guess. The number is " + rand + ".");
        break;
    } else {
        if(guess < rand) {
            alert("Sorry, try again. The number is higher than your guess.");
        } else {
            alert("Sorry, try again. The number is lower than your guess.");
        }
    }
}
document.write("The number was: " + rand + ".");