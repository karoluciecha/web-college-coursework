let numbers = [10, 20, 30, 40, 50];
let i = 1;
numbers.forEach (n => {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "i" + i + "d");
    paragraph.innerText = "Element " + i + ": " + n;
    document.body.appendChild(paragraph);
    i++;
});
