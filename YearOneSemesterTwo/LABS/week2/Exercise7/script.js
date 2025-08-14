let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");
let big = 0, small = 0;

document.write("Numbers entered were: " + num1 + ", " + num2 + ", and" + num3 + "<br>");
document.write("Average: " + (Number(num1) + Number(num2) + Number(num3)) / 3 + "<br>");
small = (num1 < num2) ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
big = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
num3;document.write("Largest: " + big + "<br>");
document.write("Smallest: " + small + "<br>");




