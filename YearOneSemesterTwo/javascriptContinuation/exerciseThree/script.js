function welcome() {
    alert("Welcome to area calculator");
}
function area(len, wid) {
    return len * wid;
}
welcome();
let length = parseInt(prompt("Enter length:"), 10), width = parseInt(prompt("Enter width:"), 10);
for (let i = 0; i < width; i++) {
    document.write("<p>");
    for (let i = 0; i < length; i++) {
        document.write("*");
    }
    document.write("</p>");
}
alert("The area is: " + area(length, width));