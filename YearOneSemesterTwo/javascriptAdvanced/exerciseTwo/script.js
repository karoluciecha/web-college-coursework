document.getElementById("username").addEventListener("input", checkUsername);

function checkUsername() {
    if ((document.getElementById("username").value).length < 6) {
        document.getElementById("result").innerHTML = "Input must be a minimum of 6 characters.";
    }
    else {
        document.getElementById("result").innerHTML = "Valid username";
    }
}

document.getElementById("and").addEventListener("blur", (event) => {
    document.getElementById("and").value = document.getElementById("and").value.replaceAll("&", "and");
});

const Action = {
    red()  { document.body.style.background = "red"; },
    green() { document.body.style.background = "green"; },
    blue()  { document.body.style.background = "blue"; },
};

const keyAction = {
    r: { keydown: Action.red},
    g: { keydown: Action.green},
    b: { keydown: Action.blue},
};

const toggleBackgroundColor = () => {
    const currentColor = document.body.style.background;
    if (currentColor === "white") {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
};
document.body.addEventListener("keydown", (ev) => {
    if (ev.repeat) return;                             
    if (!(ev.key in keyAction)) {
        toggleBackgroundColor();
        return;
      }
    keyAction[ev.key].keydown();
});

window.onload = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let suits = ["_of_diamonds", "_of_clubs", "_of_hearts", "_of_spades"];
    let deck = [];

    // Build the deck
    for (let n of numbers) {
        for (let s of suits) {
            deck.push(n + s);
        }
    }

    // Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    // Draw top card
    let cardOne = document.getElementById("cardOne");
    cardOne.src = "../cards_images/" + deck.pop() + ".png";
    document.body.appendChild(cardOne);
};