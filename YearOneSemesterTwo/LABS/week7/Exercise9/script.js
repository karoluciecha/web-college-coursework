let deck = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], ["_of_diamonds", "_of_clubs", "_of_hearts", "_of_spades"]];
window.onload = () => {
    for (i = 1; i < 520; i++){
        let randomNumber = Math.floor((Math.random() * 13));
        let bottomNumber = deck[0].pop();
        let randomSymbol = Math.floor((Math.random() * 4));
        let bottomSymbol = deck[1].pop();
        deck[0].splice(randomNumber, 0, bottomNumber);
        deck[1].splice(randomSymbol, 0, bottomSymbol);
    }  
}
let cardOne = document.createElement("img");
cardOne.setAttribute("src", "../cards_images/" + deck[0].pop() + deck[1].pop() + ".png");
document.body.appendChild(cardOne);