const square = (num) => num * num;
document.write("<h1>Square the numbers from 1 to 10</h1>");
for (let i = 1; i <= 10; i++) {
    document.write("<p>The square of " + i + " is " + square(i));
}