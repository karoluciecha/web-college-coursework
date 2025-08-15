function function1() {
    document.write("<p>Hello from function1</p>");
}
function function2() {
    document.write("<p>Hello from function2</p>");
}
function function3(val) {
    document.write("<p>You passed me, function3, a value of: " + val + "</p>");
}
function function4(val1, val2) {
    document.write("<p>You passed me, function4, a values of: " + val1 + " and " + val2 + "</p>");
}
function function5(val1, val2, val3) {
    document.write("<p>You passed me, function5, a values of: " + val1 + ", " + val2 + " and " + val3 + "</p>");
}
function function6(fname, lname) {
    document.write("<p>You passed me, function6, a values of: " + fname + " " + lname + "</p>");
}
function function7() {
    return Math.floor(Math.random() * 100);
}
function function8(fname, lname) {
    return ("<p>" + fname + " " + lname + "</p>");
}
const function9 = (a, b, c) => Number(a) + Number(b) + Number(c);
function1();
function2();
function3(prompt("Pass me a value:"));
function4(prompt("Pass me a value1:"), prompt("Pass me a value2:"));
function5(prompt("Pass me a value1:"), prompt("Pass me a value2:"), prompt("Pass me a value3:"));
function6(prompt("Pass me your first name:"), prompt("Pass me your last name"));
document.write("<p>function7 returned a value of " + function7() + " to me.");
document.write(function8(prompt("Pass me your first name:"), prompt("Pass me your last name")));
document.write(function9(prompt("Pass me a value1:"), prompt("Pass me a value2:"), prompt("Pass me a value3:")));