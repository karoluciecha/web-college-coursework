const magic = Math.floor(Math.random() * 100) + 1;
let tries = 5;
let hangmanImages = ["hangman6.jpg", "hangman5.jpg", "hangman4.jpg", "hangman3.jpg", "hangman2.jpg", "hangman1.jpg"];
function guess() {
    if (tries >= 0) {
        if (document.getElementById("num").value > magic) {
            document.getElementById("info").innerHTML = "Too high. Try again.";
            document.getElementById("hmi").src = hangmanImages[tries];
        }
        else if (document.getElementById("num").value < magic) {
            document.getElementById("info").innerHTML = "Too low. Try again.";
            document.getElementById("hmi").src = hangmanImages[tries];
        }
        else if (document.getElementById("num").value == magic) {
            document.getElementById("info").innerHTML = "Well done. You guessed correctly. Refresh the web page to play again.";
            document.getElementById("btn").remove();
        }
    }
    else {
        document.getElementById("info").innerHTML = "You lose. Game over.";
        document.getElementById("btn").remove();
    }
    tries--;
}